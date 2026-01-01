import LauroAbout from "./LauroAbout";
import LauroShortCart from "./LauroShortCart";
import LauroMenu from "./LauroMenu";
import BrandsVisual from "../BrandsVisual";
import { Kv_Lauro } from "../../../images";
import LauroSwiper from "./LauroSwper";
import BrandsButton from "../BrandsButton";
import Navbar from "../../Navbar";
import Recruitment from "../../TopPage/Recruitment";
import Footer from "../../Footer";

const BrandsIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <BrandsVisual imge={Kv_Lauro} />
        <LauroAbout />
        <LauroShortCart />
        <LauroMenu />
        <LauroSwiper />
        <BrandsButton />
        <Recruitment />
      </main>
      <Footer />
    </>
  );
};

export default BrandsIndex;
