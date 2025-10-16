import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Product from "@/components/ui/Product";
import { MapPinHouse, MapPinHouseIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="pt-56 pb-20">
        <Product />
      </div>
      <Footer />
    </div>
  );
}
