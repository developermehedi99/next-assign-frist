import Footer from "@/components/Footer";
import GetContact from "@/components/GetContact";
import HeroSec from "@/components/HeroSec";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div>
      <HeroSec></HeroSec>
      <ProductsPage></ProductsPage>
      <GetContact></GetContact>
      <Footer></Footer>
    </div>
  );
}
