import { Link } from "react-router-dom";
import { piumoreBack } from "../../images";
const About = () => {
  return (
    <section className="relative w-full flex justify-center mt-40">
      <div className="relative w-full max-w-[900px] px-6">
        {/* background logo centered behind content */}
        <img
          src={piumoreBack}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] opacity-10 pointer-events-none z-0"
        />

        {/* content sits above the background */}
        <div className="relative text-center">
          <h2 className="text-4xl font-medium mb-6">
            <span className="text-[#B42423]">PIUMORE</span>とは
          </h2>

          <div className="text-[18px] space-y-4">
            <p>
              「PIUMORE（ピュウモア）」は、イタリア語の“
              <span className="text-[#B42423] font-bold">PIÙ＝もっと</span>
              ”と英語の“
              <span className="text-[#B42423] font-bold">MORE＝もっと</span>
              ”を掛け合わせた言葉。
            </p>
            <p>
              私たちは、“もっと美味しく”“もっと心地よく”“もっと働きやすく”を追求し続ける集団です。
            </p>
            <p>飲食店の限界を決めるのは、私たち自身。</p>
            <p>
              お客様にとっても、スタッフにとっても、
              <span className="text-[#B42423] font-bold">
                「もっと」を叶える場所
              </span>
              を目指しています。
            </p>
          </div>
          <Link
            to="/companyindex"
            className=" text-black hover:text-[#B42423] hover:underline mt-6 inline-block text-base"
            onClick={() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
          >
            会社概要はこちら
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
