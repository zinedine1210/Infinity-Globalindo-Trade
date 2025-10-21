import { Icon } from "@iconify/react";
import React from "react";
import { getEnvVar } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  const address = getEnvVar("OFFICE_ADDRESS", "");
  const workshopAddress = getEnvVar("WORKSHOP_ADDRESS", "");
  const unit = getEnvVar("COMPANY_UNIT", "");
  const companyName = getEnvVar("COMPANY_NAME", "");
  return (
    <div
      id="hero"
      className="min-h-full py-10 xl:py-0 xl:min-h-[650px] h-full bg-gradient-to-b from-[#282828] via-[#212C84] to-[#1D98C4]"
    >
      <div className="xl:flex xl:items-center xl:justify-between container px-5 sm:px-20 mx-auto w-full xl:max-w-[1440px] xl:gap-x-16 xl:min-w-3/4">
        <div className="text-white w-full xl:w-1/2 text-center xl:text-start">
          <Image
            src="/Logo Infinity Globalindo Trade 2.png"
            alt="LOGO"
            width={134}
            height={40}
            className="w-[133.33px] h-auto mb-5 mx-auto xl:mx-0"
            priority
          />
          <h1 className="text-[32px] font-semibold">{companyName}</h1>

          <p className="text-xl mt-5">
            As a leader in the import-export industry, with an extensive global
            network and a team of experienced professionals, we at PT Infinity
            Globalindo Trade understand the importance of quality and timely
            delivery.Therefore, we are committed to providing the best hardware
            import-export services.
          </p>

          <div className="mt-16 justify-center xl:justify-start sm:flex space-y-5 sm:space-y-0 items-center gap-x-5">
            <a
              href={getEnvVar("COMPANY_SITE", "#")}
              target="_blank"
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
          <Image
            src="/Group 1.png"
            alt="Group Image"
            width={800}
            height={500}
            className="w-auto h-[385px] xl:h-[500px] mx-auto xl:mx-0 -mb-20"
            priority={false}
          />

          <div className="w-full sm:w-10/12 xl:w-full mx-auto xl:pl-10">
            <div className="rounded-xl z-20 bg-[#282828] border border-[#666666] p-5 text-white">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Icon icon={"hugeicons:location-04"} className="text-3xl" />
                <h1 className="text-xl font-semibold">OUR LOCATION</h1>
              </div>
              <div className="flex gap-x-5 text-white mt-5">
                <div className="w-1/2">
                  <h1 className="font-semibold text-sm">MAIN OFFICE</h1>
                  <p className="text-xs text-[#BBBBBB] mt-2">{address}</p>
                </div>
                <div className="w-1/2">
                  <h1 className="font-semibold text-sm">WORKSHOP</h1>
                  <p className="text-xs text-[#BBBBBB] mt-2">{workshopAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
