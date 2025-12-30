import { Kathura_food, Kathura_shop } from "../../../images";

const KathuraShortCart = () => {
  return (
    <>
      <div className="w-full px-[5%] lg:px-[10%]   flex justify-center mb-20">
        <div className="w-full bg-white rounded-xl  p-0 md:p-5 lg:p-10 flex flex-col md:flex-row  gap-8 max-w-[1200px] mx-auto leading-relaxed tracking-wide">
          <div className="flex-1 w-full sm:w-[45%]">
            <h2 className="text-2xl md:text-xl lg:text-5xl font-bold text-[#B42423] leading-tight my-8">
              路地裏に佇む <br /> 本格イタリアン
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed ">
              一度は廃れてしまった江戸味噌を使った甘辛い
              <br className="hidden sm:block"  />
              絶品かえしはどこにも無い逸品。
              <br className="hidden sm:block"  />
              お肉は全国より選りすぐった鶏、しゃも、牛、豚、鴨などを使用。
            </p>
            <p>季節の野菜などを使い伝統的な日本料理をベースにしています。</p>
          </div>

          <div className="relative w-full sm:w-[55%] aspect-[4/3] overflow-visible">
            <img
              src={Kathura_food}
              alt="料理"
              className="w-full md:w-[55%] lg:w-[65%]  static sm:absolute md:top-8 md:left-10   lg:top-10 object-cover rounded-lg "
            />
            <img
              src={Kathura_shop}
              alt="店舗"
              className="w-full md:w-[55%] lg:w-[65%] static sm:absolute md:left-40 lg:left-55  md:translate-y-[200px]  object-cover rounded-lg mt-4 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default KathuraShortCart;