"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import data from "../../../public/data.json";
import CardProduct from "./CardProduct";

interface FilterProps {
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
      <div className="w-full max-w-[1440px] min-w-3/4 mx-auto">
        <h1 className="text-center font-semibold text-black text-5xl">
          Our Product
        </h1>
        <div className="flex items-center justify-center mt-8 gap-x-5">
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
                  src={"/Logo Infinity Globalindo Trade 1.png"}
                  alt={item[1][0].title}
                  className="w-10 h-10"
                />
                <h1>{item[0]}</h1>
              </button>
            );
          })}
        </div>
        <div className="border-t-2 mt-16 py-16 border-gray-200">
          <div className="flex gap-x-10">
            <div className="w-fit min-w-56 max-w-72">
              <h1 className="font-medium text-xl">Select Product</h1>
              <p className="mt-5">By categories</p>
              <div className="px-5 mt-5 space-y-5">
                <label htmlFor="all" className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    checked={
                      filter.length == Object.entries(groupedFilters).length
                    }
                    onChange={(e) => handleCheckAll(e)}
                    id="all"
                    className="w-5 h-5 outline-none"
                  />
                  <h1 className="text-sm">All Categories</h1>
                </label>
                {Object.entries(groupedFilters).map((item, index) => {
                  return (
                    <label
                      key={index}
                      htmlFor={item[0]}
                      className="flex items-center gap-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={
                          filter.find((res) => res.title === item[0])
                            ? true
                            : false
                        }
                        onChange={(e) => handleCheckFilter(e, item[0])}
                        id={item[0]}
                        className="w-5 h-5 outline-none"
                      />
                      <h1 className="text-sm text-[#666666]">{item[0]}</h1>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <h1 className="font-semibold text-3xl mb-5">
                Showing{" "}
                {
                  data.items.filter((res) => {
                    if (
                      res.TabCategory === tab &&
                      filter.find((res2) => res2.title === res.category)
                    ) {
                      return true;
                    }
                    return false;
                  }).length
                }{" "}
                product
              </h1>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {data.items
                  .filter((res) => {
                    if (
                      res.TabCategory === tab &&
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
