import { recruitmentCircle, rightArrow } from "../../images/";
import "./css/recruitment.css";
import { Link } from "react-router-dom";
const Recruitment = () => {
  return (
    <section className="w-full mt-12 md:mt-20 mb-12 md:mb-20">
      <div className="mx-auto w-[92%] md:w-[75%] flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-40">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
          <h2 className="text-[28px] md:text-4xl pb-4 md:pb-8 font-semibold">
            採用情報
          </h2>

          <p className="text-[16px] md:text-[20px] font-medium">
            私たちは、社員一人ひとりが最大限の能力を
          </p>
          <p className="text-[16px] md:text-[20px] mb-4 md:mb-5 font-medium">
            発揮できる環境づくりを大切にしています。
          </p>
          <Link
            to="/recruitindex"
            onClick={() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
            className="
    cursor-pointer
    group
    relative
    bg-[#B42423]
    h-11
    w-[180px] md:w-[170px]
    hover:md:w-[200px]
    rounded-lg
    flex items-center justify-center
    overflow-hidden
    transition-all duration-300
    text-white
    whitespace-nowrap
    font-medium
  "
          >
            採用情報を見る
            <img
              src={rightArrow}
              alt=""
              className="
      absolute right-6.5 w-4
      opacity-0 translate-x-2
      transition-all duration-300
      group-hover:md:opacity-100
      group-hover:md:translate-x-0
      hidden md:block
    "
            />
          </Link>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src={recruitmentCircle}
            alt=""
            className="w-[220px] h-[220px] md:w-[400px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
