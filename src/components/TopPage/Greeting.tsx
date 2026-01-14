import { useState } from "react";
import { representative, rightArrow, rightArrowRed } from "../../images";
import "./css/greeting.css";
import { Link } from "react-router-dom";

const Greeting = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="w-full mt-16 md:mt-40">
      <div className="relative mx-auto w-[92%] md:w-[75%] flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        <img
          className="w-full max-w-[420px] md:max-w-none md:w-auto md:mt-3.5 object-cover"
          src={representative}
          alt="代表"
        />

        <div className="flex-1">
          <h3 className="text-[28px] md:text-[42px] mb-4 md:mb-8">
            代表メッセージ
          </h3>

          <p className="text-[16px] md:text-[18px] leading-10 md:leading-9">
            飲食業界は、環境変化の影響を受けやすく、常に柔軟な経営判断が求められる分野です。
          </p>

          <p className="text-[16px] md:text-[18px] pb-4 md:pb-6 leading-7 md:leading-10">
            だからこそ当社では、「品質」「接客」「働く人材」「組織づくり」
            この4つを成長の核として位置づけ、店舗運営の標準化と個性化の両立を目指しています。
          </p>

          <p className="text-[16px] md:text-[18px] leading-7 md:leading-10 mb-6 md:mb-10">
            食を取り巻く環境が変わり続ける中で、
            PIUMOREは「確かな品質」と「誠実な運営」を第一に、
            長く信頼いただけるパートナーでありたいと考えております。
          </p>

          <p className="text-[18px] md:text-[20px] font-normal">
            代表
            <span className="text-[24px] md:text-[28px] pl-2">小森 桂介</span>
          </p>
        </div>

        <div
          className="
            relative w-full md:absolute md:right-0 md:bottom-0
            md:w-[320px] md:h-[190px]
            h-[120px] mt-0 overflow-hidden
          "
        >
          <div
            className="
              greet-message
              absolute right-0 bottom-6 md:bottom-[30%]
              flex items-center gap-2 pr-2 text-[#b42423]
            "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Link
              to="/message"
              className="flex items-center justify-end gap-2 text-[16px] md:text-[18px] z-10 border-none"
            >
              メッセージを読む
            </Link>
            <img
              className="w-4 md:w-5"
              src={isHover ? rightArrow : rightArrowRed}
              alt=""
            />
          </div>

          <div className="quarter-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
