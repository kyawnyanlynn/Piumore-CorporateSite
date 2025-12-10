import recruitmentCircle from "../../images/Recruitment.png";
const Recruitment = () => {
  return (
    <>
      <div className="flex justify-center mt-20 mb-20 gap-40">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl pb-8">採用情報</h2>
          <p className="text-[20px]">
            私たちは、社員一人ひとりが最大限の能力を
          </p>
          <p className="text-[20px] mb-5">
            発揮できる環境づくりを大切にしています。
          </p>
          <button className="bg-[#B42423] w-[150px] h-11 rounded-lg">
            <a className="text-white" href="">
              採用情報を見る
            </a>
          </button>
        </div>
        <div className="h-[400px] w-[400px] rounded-full">
          <img className="" src={recruitmentCircle} alt="" />
        </div>
      </div>
    </>
  );
};
export default Recruitment;
