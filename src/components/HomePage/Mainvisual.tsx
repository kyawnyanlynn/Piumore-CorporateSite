import { kv1, kv2, kv3 } from "../../images";
import { useState, useEffect } from "react";
import "../Css/mainvisual.css";

const images = [kv1, kv2, kv3];

const Mainvisual = () => {
  const [index, setIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen min-h-screen bg-white overflow-hidden mt-20">
      <div className="relative w-full">
        <div className="slideshow-container ml-auto w-[70%] h-[calc(100vh-80px)] rounded-l-2xl overflow-hidden">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`slideshow-image ${i === index ? "active" : ""}`}
              alt="main visual"
            />
          ))}
        </div>

        <div className="absolute left-[17%] top-[50%] -translate-y-1/2 flex items-start gap-8">
          <div
            className="bg-[#B42423] w-[120px] h-[500px] opacity-0 flex pt-[15px] justify-center animate-slide-top-left"
            style={{ animationDelay: "0.2s", writingMode: "vertical-rl" }}
          >
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.3s",
              }}
            >
              現
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.4s",
              }}
            >
              状
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.5s",
              }}
            >
              を
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.6s",
              }}
            >
              変
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.7s",
              }}
            >
              え
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.8s",
              }}
            >
              る
            </h1>
          </div>

          <div
            className="bg-[#B42423] w-[120px] h-[410px] flex pt-[15px] justify-center animate-slide-top-left"
            style={{ animationDelay: "0s", writingMode: "vertical-rl" }}
          >
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.2s",
              }}
            >
              飲
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.3s",
              }}
            >
              食
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.4s",
              }}
            >
              業
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.5s",
              }}
            >
              界
            </h1>
            <h1
              className="font-bold text-[72px] text-white animate-slide-text opacity-0"
              style={{
                textOrientation: "upright",
                letterSpacing: "10px",
                animationDelay: "0.6s",
              }}
            >
              の
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainvisual;
