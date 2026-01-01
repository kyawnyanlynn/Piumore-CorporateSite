import BrandsVisual from "../BrandsVisual";
import { KV_Kathura } from "../../../images";
import KathuraAbout from "./katsuraAbout";
import KatsuraShortCart from "./katsuraShortCart";
import KatsuraMenu from "./katsuraMenu";
import KatsuraSwiper from "./katsuraSwiper";
// import KathuraShortCart from "./katsuraShortCart";
// import KathuraMenu from "./katsuraMenu";
// import KathuraSwiper from "./katsuraSwiper";
import Footer from "../../Footer";
import BrandsButton from "../BrandsButton";
import Navbar from "../../Navbar";
import Recruitment from "../../TopPage/Recruitment";

const KathuraIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <BrandsVisual imge={KV_Kathura} />
        <KathuraAbout />
        <KatsuraShortCart />
        <KatsuraMenu />
        <KatsuraSwiper />
        {/* <KathuraMenu /> */}
        {/* <KathuraSwiper /> */}
        <BrandsButton />
        <Recruitment />
      </main>
      <Footer />
    </>
  );
};
export default KathuraIndex;
