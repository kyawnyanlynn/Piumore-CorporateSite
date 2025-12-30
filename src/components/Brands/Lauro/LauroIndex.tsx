import LauroAbout from "./LauroAbout";
import LauroShortCart from "./LauroShortCart";
import LauroMenu from "./LauroMenu";
import BrandsVisual from "../BrandsVisual";
import { Kv_Lauro } from "../../../images";
import LauroSwiper from "./LauroSwper";
import BrandsButton from "../BrandsButton";
import Navbar from "../../Navbar";
import Recruitment from "../../TopPage/Recruitment";

const BrandsIndex = () => {
  return (
    <>
      <Navbar />
      <BrandsVisual imge={Kv_Lauro} />
      <LauroAbout />
      <LauroShortCart />
      <LauroMenu />
      <LauroSwiper />
      <BrandsButton />
      <Recruitment />
    </>
  );
};

export default BrandsIndex;
