import {
  FCbusiness_1,
  FCbusiness_2,
  Recruit_hinoya,
  FCbusiness_3,
} from "../../images";
import Navbar from "../Navbar";
import Footer from "../Footer";

const FCIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-[33px]">
          <div className="px-[5%] sm:px-[10%] my-10 leading-relaxed mt-[90px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-20">
              PIUMOREの取り組み
            </h2>
            <p className="text-[#B42423] my-5 font-semibold text-xl ">
              ともに発展していく
            </p>
            <div className="flex gap-3 my-10">
              <img src={FCbusiness_1} alt="" className="w-[70px] h-[70px]" />
              <img src={FCbusiness_2} alt="" className="w-[70px] h-[70px]" />
            </div>
            <p className="font-medium leading-7 text-base">
              PIUMOREはパートナー様と共に発展していくを目標に、飲食Ver3.0を掲げて、
              <br />
              これからの時代にふさわしい飲食業界の在り方を追求しています。
              <br />
              地域の食材生産者、共に働く仲間、お客様、すべてのステークホルダーと手を取り合い、
              <br />
              持続可能で誇りを持てる業界を創ってまいります。
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-20">
              FC事業：日乃屋カレー
            </h2>
            <img src={Recruit_hinoya} alt="" className="w-[80%] sm:w-[25%]" />
          </div>

          <div className="px-[5%] sm:px-[10%] flex flex-col lg:flex-row items-center gap-10 my-10 sm:my-20 ">
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-5">
                なぜFC事業をするのか？
              </h3>
              <p className="leading-7 font-medium">
                従業員の働く場所や「ワーク・ライフ・バランス」の受け皿を広げるため。
                長い人生において年齢、結婚、出産、育児、介護など様々な要因で仕事を続けられなくなる場合があります。そんな時の為に誰でも働き続けられ、自由度が高く、時間的制約も低い店舗、業態、環境を完備する為です。
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={FCbusiness_3}
                alt=""
                className="max-w-[380px] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default FCIndex;
