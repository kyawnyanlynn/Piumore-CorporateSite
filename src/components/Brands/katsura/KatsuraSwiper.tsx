import Swipercontent from "../Swipercontent";

import {
  katsuraSlide1,
  katsuraSlide2,
  katsuraSlide3,
  katsuraSlide4,
} from "../../../images";

const images = [katsuraSlide1, katsuraSlide2, katsuraSlide3, katsuraSlide4];

export default function KatsuraSwiper() {
  return <Swipercontent images={images} />;
}
