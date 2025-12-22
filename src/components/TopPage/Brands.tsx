import { katsuraLogo, hinoyaLogo, lauroLogo } from "../../images";
import "./brands.css";

const Brands = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-12 md:py-20">
      <div className="mx-auto w-[92%] md:w-[75%]">
        <h2 className="text-[28px] md:text-4xl text-center mb-10 md:mb-16">
          ブランド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-3">
          <BrandCard
            img={lauroLogo}
            label="神保町　オステリアラウロ（イタリア料理）"
          />
          <BrandCard
            img={katsuraLogo}
            label="神保町　かつら（和食・すき焼き）"
          />
        </div>
        <a className="block text-end text-[17px] pointer" href="">
          ブランド一覧
        </a>

        {/* FC Section */}
        <div className="flex flex-col items-center mt-14 md:mt-20">
          <h3 className="text-[26px] md:text-4xl mb-8 md:mb-10">FC事業</h3>
          <BrandCard img={hinoyaLogo} label="大手町　日乃屋カレー（FC事業）" />
        </div>
      </div>
    </section>
  );
};

export default Brands;

type BrandCardProps = {
  img: string;
  label: string;
};

function BrandCard({ img, label }: BrandCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-[15px] overflow-hidden bg-white max-w-[320px] md:max-w-[420px]">
        <img src={img} alt={label} className="w-full h-auto object-cover" />
      </div>

      <p className="text-center text-[18px] md:text-[18px] pt-3">{label}</p>
    </div>
  );
}
