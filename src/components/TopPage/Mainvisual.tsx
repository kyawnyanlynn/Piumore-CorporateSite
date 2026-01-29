import { kv1, kv2, kv3 } from "../../images";
import { useEffect, useState } from "react";
import "./css/mainvisual.css";

const images = [kv1, kv2, kv3];

export default function Mainvisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-x-hidden mt-20 h-[calc(100svh-80px)]">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full md:ml-auto md:w-[70%] overflow-hidden md:rounded-l-2xl">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="メインビジュアルの画像"
              className={[
                "absolute inset-0 w-full h-full object-cover block",
                "transition-opacity duration-700 ease-in-out",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>
        <div
          className="
    absolute
    left-4 top-8
    flex items-start gap-4
    md:left-[13%] md:top-1/2
    md:-translate-y-1/2
    md:translate-x-0
    md:gap-6
    lg:left-[18%] lg:top-1/2

  "
        >
          <VerticalBadge text="現状を変える" delay="200ms" tall />
          <VerticalBadge text="飲食業界の" delay="0ms" />
        </div>
      </div>
    </section>
  );
}
type VerticalBadgeProps = {
  text: string;
  delay?: string;
  tall?: boolean;
};

function VerticalBadge({
  text,
  delay = "0ms",
  tall = false,
}: VerticalBadgeProps) {
  return (
    <div
      className={[
        "bg-[#B42423] text-white font-bold",
        "flex items-center justify-center",
        "w-[62px] md:w-[72px] lg:w-[120px]",
        tall
          ? "h-[280px] md:h-[300px] lg:h-[500px]"
          : "h-[230px] md:h-[260px] lg:h-[410px]",
        "overflow-hidden",
      ].join(" ")}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "upright",
        letterSpacing: "10px",

        opacity: 0,
        animation: "badgeIn 0.8s cubic-bezier(0.5, 0.2, 0.3, 0.5) forwards",
        animationDelay: delay,
      }}
    >
      <h1
        className="text-[35px] md:text-[40px] lg:text-[68px] leading-none translate-y-1.5 "
        style={{
          opacity: 0,
          animation: "textIn 0.8s ease-in-out forwards",
          animationDelay: delay,
        }}
      >
        {text}
      </h1>
    </div>
  );
}
