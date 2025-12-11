import { Kathura_food, Kathura_shop } from "../../../images";

const KathuraShortCart = () => {
  return (
    <>
      <div className="w-full px-[5%] sm:px-[144px]  flex justify-center mt-30 mb-30">
        <div className="w-full bg-white rounded-xl  p-0 sm:p-10 flex flex-col md:flex-row  gap-8 max-w-[1200px] mx-auto leading-relaxed tracking-wide">
          <div className="flex-1 w-full sm:w-[45%]">
            <h2 className="text-2xl sm:text-5xl font-bold text-[#B42423] leading-tight mb-3">
              路地裏に佇む <br /> 本格イタリアン
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed   h-[220px]">
              一度は廃れてしまった江戸味噌を使った甘辛い絶品かえしはどこにも無い逸品。
              <br className="hidden sm:block"  />
              「お肉は全国より選りすぐった鶏、しゃも、牛、豚、鴨などを使用。
              <br className="hidden sm:block"  />
              季節の野菜などを使い伝統的な日本料理をベースにしています。
            </p>
          </div>

          <div className="relative w-full sm:w-[55%] h-[220px]">
            <img
              src={Kathura_food}
              alt="料理"
              className="absolute top-0 left-0 w-[60%]  object-cover rounded-lg "
            />
            <img
              src={Kathura_shop}
              alt="店舗"
              className="absolute right-5 w-[60%] object-cover rounded-lg  translate-y-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default KathuraShortCart;