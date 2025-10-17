"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import data from "../../../public/data.json";
import CardProduct from "./CardProduct";
import Filter from "./Filter";

export interface FilterProps {
  title: string;
}

export interface DataProps {
  imageUrl: string;
  title: string;
  description: string;
  phoneNumber: string;
  TabCategory: string;
  category: string;
  specification: {
    productDimension: string;
    innerDimension: string;
    boxBoardThickness: string;
    doorThickness: string;
    weight: string;
  };
  availableSize: { title: string; desc: string }[];
  productDescription: string;
  packingInclude: string;
}

export default function Product() {
  const groupedTab: Record<string, DataProps[]> = data.items.reduce(
    (acc: Record<string, DataProps[]>, item: DataProps) => {
      const cat = item.TabCategory;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  const groupedFilters: Record<string, DataProps[]> = data.items.reduce(
    (acc: Record<string, DataProps[]>, item: DataProps) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  const [filter, setFilter] = useState<FilterProps[]>([]);
  const [tab, setTab] = useState<keyof typeof groupedTab>(
    data.items[0].TabCategory
  );

  const handleCheckFilter = (e: any, item: string) => {
    const checked = e.target.checked;
    if (checked) {
      setFilter([...filter, { title: item }]);
    } else {
      const filDel = filter.filter((res) => res.title !== item);
      setFilter(filDel);
    }
  };

  const handleCheckAll = (e: any) => {
    const checked = e.target.checked;
    let filAll: FilterProps[] = [];
    if (checked) {
      filAll = Object.entries(groupedFilters).map((res) => ({ title: res[0] }));
    } else {
      filAll = [];
    }

    setFilter(filAll);
  };

  return (
    <section>
      <div className="w-full px-10 xl:px-0 xl:max-w-[1440px] min-w-3/4 mx-auto">
        <h1 className="text-center font-semibold text-black text-5xl">
          Our Product
        </h1>
        <div className="flex items-center justify-center mt-8 gap-x-5 gap-y-2 flex-wrap">
          {Object.entries(groupedTab).map((item, index) => {
            return (
              <button
                key={index}
                className={twMerge(
                  "flex items-center gap-x-2 py-2 px-4 font-medium rounded-full border",
                  tab === item[0] && "border-[#4349F7] bg-[#4349F7]/10"
                )}
                type="button"
                onClick={() => setTab(item[0])}
              >
                <img
                  src={item[1][0].imageUrl}
                  alt={item[1][0].title}
                  className="w-10 h-10"
                />
                <h1>{item[0]}</h1>
              </button>
            );
          })}
        </div>
        <div className="border-t-2 mt-16 py-16 border-gray-200">
          <div className="sm:flex gap-x-10">
            <Filter onSave={(value) => setFilter(value)} filter={filter} groupedFilters={groupedFilters} handleCheckAll={(e: any) => handleCheckAll(e)} handleCheckFilter={(e: any, value: string) => handleCheckFilter(e, value)}/>
            <div className="w-full">
              <h1 className="font-semibold text-[28px] mb-5">
                Showing{" "}
                {
                  data.items.filter((res) => {
                    if (
                      res.TabCategory === tab ||
                      filter.find((res2) => res2.title === res.category)
                    ) {
                      return true;
                    }
                    return false;
                  }).length
                }{" "}
                product
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {data.items
                  .filter((res) => {
                    if (
                      res.TabCategory === tab ||
                      filter.find((res2) => res2.title === res.category)
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .map((prod, index) => {
                    return <CardProduct prod={prod} key={index} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
