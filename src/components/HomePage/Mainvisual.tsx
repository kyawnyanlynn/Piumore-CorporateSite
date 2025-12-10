import { kv } from "../../images";

const Mainvisual = () => {
  return (
    <section className="relative w-screen min-h-screen bg-white overflow-hidden mt-20">
      <style>{`
        @keyframes slideFromTopLeftBounce {
          0% {
            opacity: 0;
            transform: translate(-100px, -100px);
          }
          60% {
            opacity: 1;
            transform: translate(20px, 20px);
          }
          100% {
            opacity: 1;
            transform: translate(0px, 0px);
          }
        }
        .animate-slide-top-left {
          animation: slideFromTopLeftBounce 0.75s cubic-bezier(0.5, 0.2, 0.3, 0.5) forwards;
        }
        .animate-slide-text {
          animation: slideFromTopLeftBounce 0.75s ease-in-out forwards;
        }
      `}</style>
      <div className="relative w-full">
        <div className="ml-auto w-[70%] h-[calc(100vh-80px)]">
          <img
            src={kv}
            alt="シェフの写真"
            className="w-full h-full border border-none rounded-l-2xl object-cover"
          />
        </div>

        <div className="absolute left-[17%] top-[50%] -translate-y-1/2 flex items-start gap-8">
          <div
            className="bg-[#B42423] w-[120px] h-[500px] opacity-0 flex pt-[15px] justify-center animate-slide-top-left"
            style={{ animationDelay: "0.2s", writingMode: "vertical-rl" }}
          >
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.3s",
              }}
            >
              現
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.4s",
              }}
            >
              状
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.5s",
              }}
            >
              を
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.6s",
              }}
            >
              変
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.7s",
              }}
            >
              え
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.8s",
              }}
            >
              る
            </p>
          </div>

          <div
            className="bg-[#B42423] w-[120px] h-[410px] flex pt-[15px] justify-center animate-slide-top-left"
            style={{ animationDelay: "0s", writingMode: "vertical-rl" }}
          >
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.2s",
              }}
            >
              飲
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.3s",
              }}
            >
              食
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.4s",
              }}
            >
              業
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.5s",
              }}
            >
              界
            </p>
            <p
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.6s",
              }}
            >
              の
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainvisual;
