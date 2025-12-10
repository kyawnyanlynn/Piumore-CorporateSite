import { katsuraLogo, hinoyaLogo, lauroLogo } from "../../images";
const Brands = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-25 mb-25 p-10 bg-[#F8F8F8]">
        <h2 className="text-4xl pt-15 pb-15">ブランド</h2>
        <div className="w-full flex justify-around ">
          <div>
            <img src={lauroLogo} className="w-[420px] h-[270px]"></img>
            <p className="text-center text-[18px]">
              神保町　オステリアラウロ（イタリア料理）
            </p>
          </div>
          <div>
            <img src={katsuraLogo} className="w-[420px] h-[270px]"></img>
            <p className="text-center text-[18px]">
              神保町　かつら（和食・すき焼き）
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h3 className="text-4xl pb-10">FC事業</h3>
          <div>
            <img src={hinoyaLogo} className="w-[420px] h-[270px]"></img>
            <p className="text-center text-[18px]">
              大手町　日乃屋カレー（FC事業）
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Brands;
