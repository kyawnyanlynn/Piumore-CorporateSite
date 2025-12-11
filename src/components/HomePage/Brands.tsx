import { katsuraLogo, hinoyaLogo, lauroLogo } from "../../images";
import "../Css/brands.css";
const Brands = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-25 mb-25 p-10 bg-[#F8F8F8]">
        <h2 className="text-4xl pt-15 pb-15">ブランド</h2>
        <div className="w-full flex justify-around ">
          <div className="flex-col">
            <div className="images rounded-[15px] bg-white">
              <img src={lauroLogo} className="rounded-[15px]"></img>
            </div>
            <p className="text-center text-[18px] pt-3">
              神保町　オステリアラウロ（イタリア料理）
            </p>
          </div>

          <div className="flex-col">
            <div className="images rounded-[15px] bg-white">
              <img src={katsuraLogo} className="rounded-[15px]"></img>
            </div>
            <p className="text-center text-[18px] pt-3">
              神保町　かつら（和食・すき焼き）
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h3 className="text-4xl pb-10">FC事業</h3>
          <div className="images rounded-[15px]">
            <img src={hinoyaLogo} className="rounded-[15px] bg-[#126436]"></img>
          </div>
          <p className="text-center text-[18px] pt-3">
            大手町　日乃屋カレー（FC事業）
          </p>
        </div>
      </div>
    </>
  );
};
export default Brands;
