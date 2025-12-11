import { useState } from "react";
import { representative, rightArrow, rightArrowRed } from "../../images";

import "../Css/greeting.css";
const Greeting = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex m-auto relative w-[75%] gap-10 mt-40">
      <img className="mt-3.5" src={representative} alt="" />

      <div>
        <h3 className="text-[42px] mb-8">代表メッセージ</h3>
        <p className="text-[22px]">
          飲食業界は、環境変化の影響を受けやすく、常に柔軟な経営判断が求められる分野です。
        </p>
        <p className="text-[22px] pb-6 leading-10">
          だからこそ当社では、「品質」「接客」「働く人材」「組織づくり」
          この4つを成長の核として位置づけ、店舗運営の標準化と個性化の両立を目指しています。
        </p>
        <p className="text-[22px] leading-10 mb-10">
          食を取り巻く環境が変わり続ける中で、
          PIUMOREは「確かな品質」と「誠実な運営」を第一に、
          長く信頼いただけるパートナーでありたいと考えております。
        </p>
        <p className="text-[24px] font-normal">
          代表<span className="text-[32px] pl-2.5">小森 桂介</span>
        </p>
      </div>

      <div className="absolute right-0 bottom-0 w-[320px] h-[190px] overflow-hidden">
        {/* TEXT + ARROW (this is the hover target) */}
        <div
          className="greet-message absolute bottom-[30%] pr-2 right-0 flex justify-around text-[#b42423]"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <a className="flex items-center justify-end gap-2 pr-2 text-[20px] z-10 border-none ">
            メッセージを読む
          </a>
          <img
            className="w-5"
            src={isHover ? rightArrow : rightArrowRed}
            alt=""
          />
        </div>
        {/* Quarter circle */}
        <div className="quarter-circle"></div>
      </div>
    </div>
  );
};

export default Greeting;
