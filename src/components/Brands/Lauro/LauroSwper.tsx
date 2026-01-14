import Swipercontent from "../Swipercontent";

import {
  lauroSlide1,
  lauroSlide2,
  lauroSlide3,
  lauro_shop,
} from "../../../images";

const images = [lauroSlide1, lauroSlide2, lauroSlide3, lauro_shop];

export default function LauroSwiper() {
  return <Swipercontent images={images} />;
}
