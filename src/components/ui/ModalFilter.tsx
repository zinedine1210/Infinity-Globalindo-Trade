"use client";
import { Icon } from "@iconify/react";
import { DataProps, FilterProps } from "./Product";
import { twMerge } from "tailwind-merge";
import { ChangeEvent, useEffect, useState } from "react";

export default function ModalFilter({
  groupedFilters,
  onClose,
  onSubmit,
  valueFilter
}: {
  groupedFilters: Record<string, DataProps[]>;
  onClose: () => void;
  onSubmit: (filter: FilterProps[]) => void;
  valueFilter: FilterProps[]
}) {
  const [filter, setFilter] = useState<FilterProps[]>([]);

  const handleCheckFilter = (e: ChangeEvent<HTMLInputElement>, item: string) => {
    const checked = e.target.checked;
    if (checked) {
      setFilter([...filter, { title: item }]);
    } else {
      const filDel = filter.filter((res) => res.title !== item);
      setFilter(filDel);
    }
  };

  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    let filAll: FilterProps[] = [];
    if (checked) {
      filAll = Object.entries(groupedFilters).map((res) => ({ title: res[0] }));
    } else {
      filAll = [];
    }

    setFilter(filAll);
  };

  const handleSubmit = () => {
    onSubmit(filter)
    onClose()
  }

  useEffect(() => {
    setFilter(valueFilter)
  }, [valueFilter])

  return (
    <div className="no-scrollbar fixed top-0 right-0 left-0 z-[999] flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 md:inset-0 dark:bg-black/60">
      <div className="relative max-h-full w-full">
        <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 sm:px-0">
          <div
            className={twMerge("duration-500 ease-in-out w-full max-w-[800px]")}
          >
            <div className="relative bg-white p-5 w-1/2 min-w-full max-w-[800px] rounded-xl overflow-hidden shadow-sm">
              <div className="border-b border-gray-500/20 pb-5 flex items-center justify-between">
                <h1 className="text-[#282828] font-medium text-xl">
                  Filter product by category
                </h1>
                <button type="button" onClick={() => onClose()}>
                  <Icon icon={"material-symbols:close"} className="text-3xl" />
                </button>
              </div>
              <div className="block w-full py-5">
                <div className="px-5 space-y-5">
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
              <div className="border-t border-gray-500/20 pt-5 flex items-center justify-between gap-5">
                <button
                  type="button"
                  className="button block py-3 px-5 w-full bg-white border border-gray-500/20 font-medium"
                  onClick={() => onClose()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="button block py-3 px-5 w-full bg-[#D4AF37] font-medium text-white border border-gray-500/20"
                  onClick={() => handleSubmit()}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
