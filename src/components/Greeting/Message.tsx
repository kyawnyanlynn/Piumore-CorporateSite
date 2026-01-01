// MessageSection.tsx
import { representative } from "../../images"; // 画像パスは調整してね
import Navbar from "../Navbar";
import Recruitment from "../TopPage/Recruitment";
import Footer from "../Footer";
const MessageSection = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="w-full bg-white mt-[50px]">
          <div className="mx-auto w-[92%] max-w-6xl py-14 md:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
              {/* Left */}
              <div>
                <div className="overflow-hidden rounded-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <img
                    src={representative}
                    alt="代表取締役 小森 桂介"
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-10 space-y-4">
                  <p className="text-lg tracking-wide text-black">
                    株式会社 PIUMORE
                  </p>
                  <p className="text-lg tracking-wide text-black">
                    代表取締役{" "}
                    <span className="ml-3 text-2xl font-semibold">
                      小森 桂介
                    </span>
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-[15px] leading-8 text-black md:text-base md:leading-8">
                <p>
                  平素より格別のご高配を賜り、心より御礼申し上げます。
                  <br />
                  私たちPIUMORE（ピュウモア）は、社名に込めた“もっと、もっと”という
                  精神を原動力に、飲食業を通じて価値あるサービスの提供と、
                  持続的な成長を追求してまいりました。
                </p>

                <p className="mt-8">
                  飲食業界は、環境変化の影響を受けやすく、
                  常に柔軟な経営判断が求められる分野です。
                  <br />
                  だからこそ当社では、
                  <span
                    className="font-semibold text-[#B42423]
                  ]"
                  >
                    「品質」「接客」「働く人材」「組織づくり」
                  </span>
                  この4つを成長の核として位置づけ、
                  店舗運営の標準化と個性化の両立を目指しています。
                </p>

                <p className="mt-8">
                  私たちが特に大切にしているのは、 “人を中心にした経営”です。
                  <br />
                  スタッフが自信と誇りを持って働ける職場をつくることで、
                  お客様に安定したサービスを提供し、
                  結果として店舗の収益性・継続性が強化される。
                  このシンプルな循環を、確実に積み重ねてきました。
                </p>

                <p className="mt-8">
                  現在、当社が運営する各ブランドは、
                  <br />
                  地域に根ざしながらも時代に対応したアプローチを取り入れ、
                  堅実に事業を拡大しております。
                </p>

                <p className="mt-8">
                  今後も、新規出店・業態開発・運営効率の強化を計画しており、
                  より盤石な経営基盤を築くとともに、
                  持続可能な成長を実現してまいります。
                </p>

                <p className="mt-8">
                  食を取り巻く環境が変わり続ける中で、 PIUMOREは
                  <span className="font-semibold">「確かな品質」</span>と
                  <span className="font-semibold">「誠実な運営」</span>
                  を第一に、
                  長く信頼いただけるパートナーでありたいと考えております。
                </p>
              </div>
            </div>
          </div>
        </section>
        <Recruitment />
      </main>
      <Footer />
    </>
  );
};

export default MessageSection;
