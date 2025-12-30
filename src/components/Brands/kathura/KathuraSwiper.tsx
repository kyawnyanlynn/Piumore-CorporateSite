import Swipercontent from "../Swipercontent";

import { lauro_day_people, lauro_food, lauro_shop, lauro_menu1, logo } from "../../../images";

const images = [lauro_day_people, lauro_food, lauro_shop, lauro_menu1, logo];

export default function KathuraSwiper() {
  return <Swipercontent images={images} />;
}