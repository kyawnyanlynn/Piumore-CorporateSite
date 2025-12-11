import { useState } from "react";
import { recruitmentCircle, rightArrow } from "../../images/";
import "../Css/recruitment.css";
const Recruitment = () => {
  const [isHover, setIsHover] = useState(false);

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
          <button
            className="group bg-[#B42423] w-[170px] h-11 rounded-lg flex items-center justify-center px-4 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* Text */}
            <span
              className="
      text-white 
      transition-all 
      duration-300
      group-hover:pr-3
    "
            >
              採用情報を見る
            </span>

            {/* Arrow = only rendered when hovered */}
            {isHover && (
              <img
                src={rightArrow}
                alt=""
                className="
        w-4 
        opacity-0 
        translate-x-[-8px]
        animate-arrow-in
      "
              />
            )}
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
