import { lauro_food, lauro_shop } from "../../../images";

const LauroShortCart = () => {
  return (
    <>
      <div className="w-full px-[5%] sm:px-[144px]  flex justify-center mt-30 mb-30">
        <div className="w-full bg-white rounded-xl  p-0 sm:p-10 flex flex-col md:flex-row  gap-8 max-w-[1200px] mx-auto">
          <div className="flex-1 w-full sm:w-[45%]">
            <h2 className="text-2xl sm:text-5xl font-bold text-[#B42423] leading-tight mb-3">
              路地裏に佇む <br /> 本格イタリアン
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed   h-[220px]">
              名物リゾットには、イタリアで修行経験を持つシェフの技術が活かされています。
              <br className="hidden sm:block"  />
              「国産和牛サーロインのクリアータ」では、塩・あらびき肉の風味を際立ててフォーカス。
              シンプルなスタイルが元気な舌と胸のハーモニーを引き出しています。
              <br className="hidden sm:block"  />
              季節の魚・旬の野菜を使い、味・彩り・食感のバランスを大切に。
            </p>
          </div>

          <div className="relative w-full sm:w-[55%] h-[220px]">
            <img
              src={lauro_food}
              alt="料理"
              className="absolute top-0 left-0 w-[60%]  object-cover rounded-lg shadow-md"
            />
            <img
              src={lauro_shop}
              alt="店舗"
              className="absolute right-5 w-[60%] object-cover rounded-lg shadow-md translate-y-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LauroShortCart;
