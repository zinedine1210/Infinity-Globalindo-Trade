import { Icon } from "@iconify/react";
import { Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  const companyName = process.env.COMPANY_NAME || "";
  const phone = process.env.WHATSAPP_NUMBER || "";
  const email = process.env.EMAIL || "";
  return (
    <div className="px-5 sm:px-0 container mx-auto">
      <div className="py-5 border-y border-gray-500/20 sm:flex xl:items-center gap-x-10 xl:gap-x-20">
        <div>
          <img
            src="/Logo Infinity Globalindo Trade 1.png"
            alt="LOGO"
            className="w-32 xl:w-[106.67px] h-auto"
          />
        </div>
        <div className="xl:flex xl:items-center xl:gap-x-20 space-y-5 xl:space-y-0">
          <div className="w-full">
            <h1 className="flex items-center gap-x-2 text-[#909090] text-xs mb-2 tracking-wider">
              <Icon
                icon={"hugeicons:location-04"}
                className="text-[#D4AF37] text-2xl"
              />
              ADDRESS
            </h1>
            <p className="text-sm">
              JL. PANTAI INDAH UTARA 2 PIK, Desa/Kelurahan Kapuk Muara, Kec.
              Penjaringan, Kota Adm. Jakarta Utara, Provinsi DKI Jakarta, Kode
              Pos: 14460
            </p>
          </div>
          <div className="w-full min-w-44 max-w-44">
            <h1 className="flex items-center gap-x-2 text-[#909090] text-xs mb-2 tracking-wider">
              <Phone className="text-[#D4AF37] text-2xl" /> PHONE NUMBER
            </h1>
            <p className="text-sm">+{phone}</p>
          </div>
          <div className="w-full min-w-44 max-w-44">
            <h1 className="flex items-center gap-x-2 text-[#909090] text-xs mb-2 tracking-wider">
              <Icon
                icon={"streamline-logos:email-logo-solid"}
                className="text-[#D4AF37] text-2xl"
              />{" "}
              EMAIL ADDRESS
            </h1>
            <p className="text-sm">{email}</p>
          </div>
          ˝
        </div>
        <div className="justify-start sm:justify-end py-5 sm:py-0 sm:text-end w-full min-w-44 max-w-44">
          <a
            href="#hero"
            className="button py-3 px-5 border border-gray-500/20 ml-auto w-full"
          >
            Back to Top
          </a>
        </div>
      </div>
      <div className="sm:flex text-center sm:text-start items-center justify-between py-5">
        <h1>© All Right Reserved. {companyName}</h1>
        <p>2025</p>
      </div>
    </div>
  );
}
