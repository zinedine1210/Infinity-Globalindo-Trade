import { Icon } from "@iconify/react";
import React from "react";
import { getEnvVar } from "@/lib/utils";

export default function Contact() {
  const message = encodeURIComponent(getEnvVar("CHAT_DEFAULT", "Halo"));
  const phone = getEnvVar("WHATSAPP_NUMBER", "");
  const waUrl = `https://wa.me/${phone}?text=${message}`;
  const name = getEnvVar("WHATSAPP_NAME", "");

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 py-2 px-5 bg-[#10B44D] text-white flex items-center gap-x-4 rounded-xl shadow-md"
    >
      <Icon icon={"basil:whatsapp-solid"} className="text-4xl" />
      <div>
        <h1 className="font-semibold text-[18px]">{name}</h1>
        <p className="text-sm">+{phone}</p>
      </div>
    </a>
  );
}
