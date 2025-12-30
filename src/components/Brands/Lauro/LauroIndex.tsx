import Navbar from "../../RecruitmentInformation/Navbar";
import LauroAbout from "./LauroAbout";
import LauroShortCart from "./LauroShortCart";
import LauroMenu from "./LauroMenu";
import BrandsVisual from "../BrandsVisual";
import { Kv_Lauro } from "../../../images";
import LauroSwiper from "./LauroSwper";
import BrandsButton from "../BrandsButton";
import RecruitSection from "../RecruitSection";

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
      <RecruitSection />
    </>
  );
};

export default BrandsIndex;
