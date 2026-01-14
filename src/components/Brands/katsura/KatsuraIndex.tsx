import BrandsVisual from "../BrandsVisual";
import { KV_Kathura } from "../../../images";
import KathuraAbout from "./KatsuraAbout";
import KatsuraShortCart from "./KatsuraShortCart";
import KatsuraMenu from "./KatsuraMenu";
import KatsuraSwiper from "./KatsuraSwiper";
// import KathuraShortCart from "./katsuraShortCart";
// import KathuraMenu from "./katsuraMenu";
// import KathuraSwiper from "./katsuraSwiper";
import Footer from "../../Footer";
import BrandsButton from "../BrandsButton";
import Navbar from "../../Navbar";
import Recruitment from "../../TopPage/Recruitment";

const KatsuraIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <BrandsVisual imge={KV_Kathura} />
        <KathuraAbout />
        <KatsuraShortCart />
        <KatsuraMenu />
        <KatsuraSwiper />
        <BrandsButton href="https://www.hotpepper.jp/strJ003959138/" />
        <Recruitment />
      </main>
      <Footer />
    </>
  );
};
export default KatsuraIndex;
