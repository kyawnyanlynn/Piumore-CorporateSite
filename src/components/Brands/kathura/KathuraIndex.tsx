import BrandsVisual from "../../Brands/BrandsVisual";
import { KV_Kathura } from "../../../images";
import KathuraAbout from "./KathuraAbout";
import KathuraShortCart from "./KathuraShortCart";
import KathuraMenu from "./KathuraMenu";
import KathuraSwiper from "./KathuraSwiper";
import BrandsButton from "../BrandsButton";
import Navbar from "../../Navbar";
import Recruitment from "../../TopPage/Recruitment";

const KathuraIndex = () => {
  return (
    <>
      <Navbar />
      <BrandsVisual imge={KV_Kathura} />
      <KathuraAbout />
      <KathuraShortCart />
      <KathuraMenu />
      <KathuraSwiper />
      <BrandsButton />
      <Recruitment />
    </>
  );
};
export default KathuraIndex;
