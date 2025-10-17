"use client";

import { useState } from "react";
import ModalFilter from "./ModalFilter";
import { DataProps, FilterProps } from "./Product";
import { Icon } from "@iconify/react";

export default function Filter({
  groupedFilters,
  handleCheckAll,
  handleCheckFilter,
  filter,
  onSave
}: {
  groupedFilters: Record<string, DataProps[]>;
  handleCheckAll: (e: any) => void;
  handleCheckFilter: (e: any, item: string) => void;
  filter: FilterProps[];
  onSave: (value: FilterProps[]) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:block w-fit min-w-56 max-w-72">
        <h1 className="font-medium text-xl">Select Product</h1>
        <p className="mt-5">By categories</p>
        <div className="px-5 mt-5 space-y-5">
          <label htmlFor="all" className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={filter.length == Object.entries(groupedFilters).length}
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
                    filter.find((res) => res.title === item[0]) ? true : false
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
      <div className="block sm:hidden">
        <div className="pb-10 flex items-center justify-between">
            <h1 className="text-xl font-medium">Filter product by category</h1>
            <button type="button" onClick={() => setOpen(true)}>
                <Icon icon={"solar:filter-linear"} className="text-2xl text-[#4349F7]"/>
            </button>
        </div>
        {open && (
          <ModalFilter
            groupedFilters={groupedFilters}
            onSubmit={(value) => onSave(value)}
            valueFilter={filter}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </>
  );
}
