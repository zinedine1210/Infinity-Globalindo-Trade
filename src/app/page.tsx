import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Product from "@/components/ui/Product";
import Contact from "@/components/ui/Contact";

export default function Home() {
  
  return (
    <div>
      <Hero />
      <div className="pt-20 xl:pt-56 pb-20">
        <Product />
      </div>
      <Footer />
      <Contact />
    </div>
  );
}
