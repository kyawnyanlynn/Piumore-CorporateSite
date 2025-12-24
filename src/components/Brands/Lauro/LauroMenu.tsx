import { lauro_menu2, lauro_menu3, lauro_menu4  } from "../../../images";

const LauroMenu = () => {
  return (
    <div className="w-full bg-[#9F3A2E]  px-6 sm:pb-15">
      <h2 className="text-white text-3xl font-bold text-center  py-8">
        イチオシメニュー
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div>
          <div className="w-full aspect-[1/1]  md:aspect-[4/4] mb-4 overflow-hidden rounded-lg bg-black">
            <img
              src={lauro_menu2}
              alt="AAAの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">フォアグラとポルチーニの贅沢リゾット</h3>
          <p className="text-white text-sm leading-relaxed">
         
            当店自慢の名物リゾット。
            フォアグラのコクとポルチーニの香りが広がり、
            濃厚なのに驚くほど軽い仕上がりです。ぜひ一度ご賞味ください！
          </p>
        </div> 


        <div className="pb-15 sm:pb-0">
          <div className="w-full aspect-[1/1]  md:aspect-[4/4]  mb-4 overflow-hidden rounded-lg bg-black ">
            <img
              src={lauro_menu3}
              alt="BBBの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">赤ワインでじっくり煮込んだ牛肉のラグーソース</h3>
          <p className="text-white text-sm leading-relaxed">
            赤ワインで深いコクが出るまでじっくり煮込んだ牛肉のラグーを、
            もちもち食感の “生パスタ” にたっぷり絡めた一品。
            豊かな旨みと香り、 そして生パスタならではの弾力をお楽しみください。
          </p>
        </div>


        <div className="pb-25 sm:pb-0">
          <div className="w-full aspect-[1/1]  md:aspect-[4/4]  mb-4 overflow-hidden rounded-lg bg-black ">
            <img
              src={lauro_menu4}
              alt="CCCの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">国産和牛サーロインのタリアータ (200g)</h3>
          <p className="text-white text-sm leading-relaxed px-4">
            厳選した国産和牛サーロインを、 絶妙な火入れで香ばしく焼き上げ、
            旨みを閉じ込め豪快に厚切りにしたタリアータ。
            肉本来の旨味と、 食感を存分に味わえる贅沢な一皿です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LauroMenu;
