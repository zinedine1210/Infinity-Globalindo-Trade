"use client";

import React, { useState } from "react";
import { DataProps } from "./Product";
import Modal from "./Modal";

export default function CardProduct({ prod }: { prod: DataProps }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="border border-gray-500/20 block text-center"
        onClick={() => setOpen(true)}
      >
        <div className="w-full overflow-hidden h-[240px] flex items-center justify-center">
          <img
            src={prod.imageUrl}
            alt={prod.title}
            className="w-full h-auto bg-cover"
          />
        </div>

        <div className="p-3">
          <h1 className="font-bold text-[18px]">{prod.title}</h1>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-x-2 text-[#888888] text-sm">
              <img src="/weight.png" alt="Weight" className="w-4 h-4" />
              {prod.specification.weight}
            </div>
            <div className="flex items-center gap-x-2 text-[#888888] text-sm">
              <img src="/dimension.png" alt="Dimension" className="w-4 h-4" />
              {prod.specification.productDimension}
            </div>
          </div>
        </div>
      </button>
      {open && <Modal item={prod} onClose={() => handleClose()} />}
    </>
  );
}
