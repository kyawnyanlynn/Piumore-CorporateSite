import Swipercontent from "../Swipercontent";

import { lauro_day_people, lauro_food, lauro_shop, lauro_menu1 } from "../../../images";

const images = [lauro_day_people, lauro_food, lauro_shop, lauro_menu1];

export default function LauroSwiper() {
  return <Swipercontent images={images} />;
}
