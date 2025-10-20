import { useState } from "react";
import { DataProps } from "./Product";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Modal({
  item,
  onClose,
  phone
}: {
  item: DataProps;
  onClose: () => void;
  phone: string
}) {
  const [tab, setTab] = useState(1);
  const waUrl = `https://wa.me/${phone}`;

  return (
    <div className="no-scrollbar fixed top-0 right-0 left-0 z-[999] flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 md:inset-0 dark:bg-black/60">
      <div className="relative max-h-full w-full">
        <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 sm:px-0">
          <div
            className={twMerge("duration-500 ease-in-out w-full max-w-[800px]")}
          >
            <button
              className="relative ml-auto mb-5 sm:ml-0 sm:mb-0 sm:absolute sm:top-0 sm:right-20 bg-white w-10 h-10 text-black rounded-full flex items-center justify-center"
              type="button"
              onClick={() => onClose()}
            >
              <Icon icon={"material-symbols:close"} className="text-2xl" />
            </button>
            <div className="relative bg-white w-1/2 min-w-full max-w-[800px] rounded-xl overflow-hidden shadow-sm">
              <div className="h-[400px] w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="h-[400px] w-auto"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between pb-5">
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button py-3 px-5 text-white bg-[#10B44D] flex items-center gap-x-2"
                  >
                    <Icon icon={"basil:whatsapp-solid"} className="text-2xl" />
                    Order Now
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <div className="grid-flow-col auto-cols-auto grid py-5 border-t border-gray-500/20">
                    <button
                      className={twMerge(
                        "block w-full min-w-56 py-3 text-xl whitespace-nowrap",
                        tab === 1
                          ? "border-b-2 border-[#4349F7] text-[#4349F7] font-medium"
                          : "border-b border-gray-500/20 text-[#282828]"
                      )}
                      type="button"
                      onClick={() => setTab(1)}
                    >
                      Specification
                    </button>
                    <button
                      className={twMerge(
                        "block w-full min-w-56 py-3 text-xl whitespace-nowrap",
                        tab === 2
                          ? "border-b-2 border-[#4349F7] text-[#4349F7] font-medium"
                          : "border-b border-gray-500/20 text-[#282828]"
                      )}
                      type="button"
                      onClick={() => setTab(2)}
                    >
                      Product Description
                    </button>
                    <button
                      className={twMerge(
                        "block w-full min-w-56 py-3 text-xl whitespace-nowrap",
                        tab === 3
                          ? "border-b-2 border-[#4349F7] text-[#4349F7] font-medium"
                          : "border-b border-gray-500/20 text-[#282828]"
                      )}
                      type="button"
                      onClick={() => setTab(3)}
                    >
                      Packing Include
                    </button>
                  </div>
                </div>

                <div className="py-3">
                  {tab === 1 && (
                    <div className="sm:flex space-y-5 sm:space-y-0 sm:gap-x-10">
                      <div className="w-full sm:w-1/2 sm:space-y-2">
                        <div className="flex items-center justify-between gap-x-1">
                          <h1 className="text-[#666666]">
                            Product Dimension:{" "}
                          </h1>
                          <p>{item.specification.productDimension}</p>
                        </div>
                        <div className="flex items-center justify-between gap-x-1">
                          <h1 className="text-[#666666]">Inner Dimension: </h1>
                          <p>{item.specification.innerDimension}</p>
                        </div>
                        <div className="flex items-center justify-between gap-x-1">
                          <h1 className="text-[#666666]">
                            Box Board Thickness:{" "}
                          </h1>
                          <p>{item.specification.boxBoardThickness}</p>
                        </div>
                        <div className="flex items-center justify-between gap-x-1">
                          <h1 className="text-[#666666]">Door Thickness: </h1>
                          <p>{item.specification.doorThickness}</p>
                        </div>
                        <div className="flex items-center justify-between gap-x-1">
                          <h1 className="text-[#666666]">Weight: </h1>
                          <p>{item.specification.weight}</p>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <h1 className="text-[#666666]">Available Size</h1>
                        <ol className="px-2 mt-2">
                          {item.availableSize.map((av, index) => (
                            <li
                              className="flex items-center gap-x-2"
                              key={index}
                            >
                              <h1 className="text-[#D4AF37]">{av.title}</h1> -{" "}
                              {av.desc}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                  {tab === 2 && <p>{item.productDescription}</p>}
                  {tab === 3 && <p>{item.packingInclude}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
