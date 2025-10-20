import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Product from "@/components/ui/Product";
import Contact from "@/components/ui/Contact";
import { getEnvVar } from "@/lib/utils";

export default function Home() {

  const phone = getEnvVar("WHATSAPP_NUMBER", "");
  
  return (
    <div>
      <Hero />
      <div className="pt-20 xl:pt-56 pb-20">
        <Product phone={phone}/>
      </div>
      <Footer />
      <Contact />
    </div>
  );
}
