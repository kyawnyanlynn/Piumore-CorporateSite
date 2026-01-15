import { Management_1, Management_2 } from "../../images";

const CompanyManagement = () => {
  return (
    <>
      <div className="px-[5%] sm:px-[10%] py-10 ">
        <h2 className="text-[#B42423] text-3xl sm:text-4xl font-bold mb-10">
          経営理念
        </h2>
        <div>
          <h3 className="text-[#B42423] text-2xl sm:test-3xl font-bold mb-10">
            「“もっと”の文化を世界へ」
          </h3>
          <div className="text-pretty">
            <p className="text-base/8 font-medium">
              PIUMOREは、飲食を通して人の可能性と笑顔を広げていきます。
              “もっとおいしく”、“もっと働きやすく”という価値観を、世界基準の飲食モデルに
              自社ブランドだけでなく、飲食業界全体の底上げに貢献
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 my-10">
            <img src={Management_1} alt="" />
            <img src={Management_2} alt="" />
          </div>
          <p className="text-base">
            「PIUMOREで働く＝自分の“もっと”が実現できる場所」と言われる会社へ
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyManagement;
