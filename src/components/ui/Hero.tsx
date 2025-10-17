import { Icon } from "@iconify/react";
import React from "react";

export default function Hero() {
  const address = process.env.COMPANY_ADDRESS || '';
  const unit = process.env.COMPANY_UNIT || '';
  const companyName = process.env.COMPANY_NAME || '';
  return (
    <div id="hero" className="min-h-full py-10 xl:py-0 xl:min-h-[650px] h-full bg-gradient-to-b from-[#282828] via-[#212C84] to-[#1D98C4]">
      <div className="xl:flex xl:items-center xl:justify-between container px-5 sm:px-20 mx-auto w-full xl:max-w-[1440px] xl:gap-x-16 xl:min-w-3/4">
        <div className="text-white w-full xl:w-1/2 text-center xl:text-start">
          <img
            src="/Logo Infinity Globalindo Trade 2.png"
            alt="LOGO"
            className="w-[133.33px] h-auto mb-5 mx-auto xl:mx-0"
          />
          <h1 className="text-[32px] font-semibold">
            {companyName}
          </h1>

          <p className="text-xl mt-5">
            As a leader in the import-export industry, with an extensive global
            network and a team of experienced professionals, we at PT Infinity
            Globalindo Trade understand the importance of quality and timely
            delivery.Therefore, we are committed to providing the best hardware
            import-export services.
          </p>

          <div className="mt-16 justify-center xl:justify-start sm:flex space-y-5 sm:space-y-0 items-center gap-x-5">
            <a href={process.env.COMPANY_SITE} target="_blank"
              className="w-full max-w-56 button mx-auto sm:mx-0 block bg-[#D4AF37] text-white"
            >
              Visit Our Company Site
            </a>
            <button
              type="button"
              className="w-full max-w-56 button mx-auto sm:mx-0 block bg-white text-black"
            >
              Discover Our Product
            </button>
          </div>
        </div>
        <div className="w-full xl:w-1/2 relative">
          <img
            src="/Group 1.png"
            alt="Group Image"
            className="w-auto h-[385px] xl:h-[500px] mx-auto xl:mx-0 -mb-20"
          />

          <div className="w-full sm:w-3/4 xl:w-full mx-auto xl:pl-10">
            <div className="rounded-xl z-20 bg-[#282828] border border-[#666666] p-5 text-white flex gap-x-5">
              <Icon icon={"hugeicons:location-04"} className="text-[#D4AF37] text-5xl" />
              <div>
                <h1 className="font-semibold">
                  {unit}
                </h1>
                <p className="text-sm text-[#BBBBBB] mt-3">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
