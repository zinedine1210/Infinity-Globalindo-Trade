import { MapPinHouseIcon, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="py-5 border-y border-gray-500/20 flex items-center gap-x-20">
        <img
          src="/Logo Infinity Globalindo Trade 1.png"
          alt="LOGO"
          className="w-[106.67px] h-auto"
        />
        <div className="w-1/2">
            <h1 className="flex items-center gap-x-2 text-[#909090] text-xs mb-2 tracking-wider"><MapPinHouseIcon className="text-[#D4AF37] text-2xl" /> ADDRESS</h1>
            <p className="text-sm">JL. PANTAI INDAH UTARA 2 PIK, Desa/Kelurahan Kapuk Muara, 
            Kec. Penjaringan, Kota Adm. Jakarta Utara, Provinsi DKI Jakarta, Kode Pos: 14460</p>
        </div>
        <div>
            <h1 className="flex items-center gap-x-2 text-[#909090] text-xs mb-2 tracking-wider"><Phone className="text-[#D4AF37] text-2xl" /> PHONE NUMBER</h1>
            <p className="text-sm">+6289-5668-1029-200</p>
        </div>
        <div className="ml-auto">
            <a href="#hero" className="button py-3 px-5 border border-gray-500/20 ml-auto">Back to Top</a>
        </div>
      </div>
      <div className="flex items-center justify-between py-5">
        <h1>© All Right Reserved. PT Infinity Globalindo Trade</h1>
        <p>2025</p>
      </div>
    </div>
  );
}
