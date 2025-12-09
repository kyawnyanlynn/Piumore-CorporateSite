import Navbar from "../../Navbar";
import LauroAbout from "./LauroAbout";
import LauroShortCart from "./LauroShortCart";
import LauroMenu from "./LauroMenu";
import BrandsVisual from "../BrandsVisual";
import { Kv_Lauro } from "../../../images";
import LauroSwiper from "./LauroSwper";


const BrandsIndex = () => {
  return (
    <>
      <Navbar />
      <BrandsVisual imge={Kv_Lauro} />
      <LauroAbout />
      <LauroShortCart />
      <LauroMenu />
      <LauroSwiper />
    </>
  );
};

export default BrandsIndex;
