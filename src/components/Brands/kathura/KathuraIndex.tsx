import BrandsVisual from "../../Brands/BrandsVisual"
import { KV_Kathura } from "../../../images"
import KathuraAbout from "./KathuraAbout"
import KathuraShortCart from "./KathuraShortCart"
import KathuraMenu from "./KathuraMenu"

const KathuraIndex = () => {
    return (
        <>
            <BrandsVisual imge={ KV_Kathura} />
            <KathuraAbout />
            <KathuraShortCart />
            <KathuraMenu />
        </>
    )
}
export default KathuraIndex;