import { MapPinHouseIcon } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="min-h-[650px] h-full py-10 bg-gradient-to-b from-[#282828] via-[#212C84] to-[#1D98C4]">
      <div className="flex items-center justify-between container px-20 mx-auto w-full max-w-[1440px] gap-x-16 min-w-3/4">
        <div className="text-white w-1/2">
          <img
            src="/Logo Infinity Globalindo Trade 2.png"
            alt="LOGO"
            className="w-[133.33px] h-auto mb-5"
          />
          <h1 className="text-[32px] font-semibold">
            PT Ifinity Globalindo Trade
          </h1>

          <p className="text-xl mt-5">
            As a leader in the import-export industry, with an extensive global
            network and a team of experienced professionals, we at PT Infinity
            Globalindo Trade understand the importance of quality and timely
            delivery.Therefore, we are committed to providing the best hardware
            import-export services.
          </p>

          <div className="mt-16 flex items-center gap-x-5">
            <button
              type="button"
              className="w-full max-w-56 button bg-[#D4AF37] text-white"
            >
              Visit Our Company Site
            </button>
            <button
              type="button"
              className="w-full max-w-56 button bg-white text-black"
            >
              Discover Our Product
            </button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/Group 1.png"
            alt="Group Image"
            className="w-auto h-[450px] -mb-16"
          />

          <div className="pl-10">
            <div className="rounded-xl z-20 bg-[#282828] border border-[#666666] p-5 text-white flex gap-x-5">
              <MapPinHouseIcon className="text-[#D4AF37] text-2xl" />
              <div>
                <h1 className="font-semibold">
                  TOWER ARCADE BUSINESS CENTER 6Th FLOOR UNIT 6-03.
                </h1>
                <p className="text-sm text-[#BBBBBB] mt-3">
                  JL. PANTAI INDAH UTARA 2 PIK, Desa/Kelurahan Kapuk Muara, Kec.
                  Penjaringan, Kota Adm. Jakarta Utara, Provinsi DKI Jakarta,
                  Kode Pos: 14460
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
