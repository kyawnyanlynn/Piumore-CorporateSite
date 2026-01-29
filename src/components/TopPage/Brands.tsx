import { katsuraLogo, hinoyaLogo, lauroLogo } from "../../images";
import { Link } from "react-router-dom";

import "./css/brands.css";
import "../../App.css";
const Brands = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-12 md:py-16">
      <div className="mx-auto w-[92%] md:w-[75%]">
        <h2 className="text-[32px] md:text-5xl text-center mb-10 md:mb-16 font-semibold text-[#B42423]">
          ブランド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-3">
          <BrandCard
            to="/lauro"
            img={lauroLogo}
            label="神保町　オステリアラウロ（イタリア料理）"
          />
          <BrandCard
            to="/katsura"
            img={katsuraLogo}
            label="神保町　かつら（和食・すき焼き）"
          />
        </div>
        <Link
          to="/brandscollection"
          className="block text-end text-base pointer hover:underline text-black hover:text-[#B42423] font-semibold mt-10"
          onClick={() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }}
        >
          ブランド一覧
        </Link>
        <div className="flex flex-col items-center mt-14 md:mt-20">
          <h3 className="text-[26px] md:text-4xl mb-8 md:mb-10 font-semibold">
            FC事業
          </h3>
          <BrandCard
            to="/fcindex"
            img={hinoyaLogo}
            label="大手町　日乃屋カレー（FC事業）"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;

type BrandCardProps = {
  img: string;
  label: string;
  to: string;
};

function BrandCard({ img, label, to }: BrandCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Link
        to={to}
        className="w-full max-w-[320px] md:max-w-[420px] rounded-[15px] overflow-hidden bg-white block
                   transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <img src={img} alt={label} className="w-full h-auto object-cover" />
      </Link>

      <p className="text-center text-[18px] md:text-[20px] pt-3 font-bold text-[#232121f9]">
        {label}
      </p>
    </div>
  );
}
