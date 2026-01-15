const KatsuraAbout = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:my-20 leading-relaxed tracking-wide">
        <h1 className="font-semibold text-center text-2xl sm:text-5xl  sm:mb-20 py-7 sm:py-0 text-[#B42423] ">
          コンセプト
        </h1>
        <div className="text-[18px]">
          <p className="text-left px-[5%] sm:px-0 text-lg ">
            歌舞伎の演目にも登場する伝統味噌を使い江戸時代のレシピを再現した江戸
          </p>
          <p className="text-left px-[5%] sm:px-0  text-base sm:text-lg">
            前すき焼きが名物のお店。
          </p>
          <p className="text-left px-[5%] sm:px-0 text-lg">
            {" "}
            接待や会合、宴会など様々なシーンでご利用頂いているお店です。
          </p>
        </div>
      </div>
    </>
  );
};

export default KatsuraAbout;
