import { boss } from "../../images";
const Greeting = () => {
  return (
    <>
      <div className="flex w-[80%] m-auto gap-5">
        <div className="bg-amber-600 w-[412px]">
          <img src={boss} alt="社長の写真" />
        </div>
        <div className="flex flex-col">
          <div className="">
            <h3 className="text-[44px] mb-12">代表挨拶</h3>
            <p className="text-[20px]">
              飲食業界は、環境変化の影響を受けやすく、常に柔軟な経営判断が求められる分野です。
            </p>
            <p className="text-[20px] pb-6 leading-10">
              だからこそ当社では、「品質」「接客」「働く人材」「組織づくり」
              この4つを成長の核として位置づけ、店舗運営の標準化と個性化の両立を目指しています。
            </p>
            <p className="text-[20px] leading-10">
              食を取り巻く環境が変わり続ける中で、
              PIUMOREは「確かな品質」と「誠実な運営」を第一に、
              長く信頼いただけるパートナーでありたいと考えております。
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              代表 <span className="text-[22px]">小森 桂介</span>
            </p>
            <a className="underline" href="">
              メッセージを読む
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Greeting;
