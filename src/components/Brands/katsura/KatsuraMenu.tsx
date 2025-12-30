import { katsura_menu1, katsura_menu2, katsura_menu3 } from "../../../images";

const KatsuraMenu = () => {
  return (
    <div className="w-full bg-[#9F3A2E]  px-6 sm:pb-15">
      <h2 className="text-white text-3xl font-bold text-center  py-8">
        イチオシメニュー
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div>
          <div className="w-full aspect-[1/1]  md:aspect-[4/4] mb-4 overflow-hidden rounded-lg bg-black">
            <img
              src={katsura_menu1}
              alt="AAAの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">江戸前すき焼き　かしわ鍋 ・ しゃも鍋</h3>
          <p className="text-white text-sm leading-relaxed">
          江戸時代、 肉食は禁止…でもこっそりと庶民が “鋤 （すき）” を鉄板代わりに味噌と一緒に焼いたのが、 すき焼きの始まり。 当店では、 歌舞伎にも登場する “幻の伝統味噌” を復活！
          厳選肉とともに、 江戸の味を気軽に楽しめます。
          </p>
        </div> 


        <div className="pb-15 sm:pb-0">
          <div className="w-full aspect-[1/1]  md:aspect-[4/4]  mb-4 overflow-hidden rounded-lg bg-black ">
            <img
              src={katsura_menu2}
              alt="BBBの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">すき焼き仕立ての親子鍋定食</h3>
          <p className="text-white text-sm leading-relaxed">
            江戸前すき焼きをランチでも楽しめます。最初は玉子にくぐらせてすき焼きでお召し上がりください。
            途中で鍋に玉子を入れてトロトロにし、 ご飯の上に乗せて最後は親子丼に！
            幻の江戸味噌と厳選鶏の旨味を存分にお楽しみください。
          </p>
        </div>


        <div className="pb-25 sm:pb-0">
          <div className="w-full aspect-[1/1]  md:aspect-[4/4]  mb-4 overflow-hidden rounded-lg bg-black ">
            <img
              src={katsura_menu3}
              alt="CCCの写真"
              className="w-full  h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">店主こだわりのプレミアム焼酎と日本酒</h3>
          <p className="text-white text-sm leading-relaxed px-4">
            全国より厳選したこだわりのお酒の数々で皆様をおもてなし致します。 時々により隠し酒もございますのでお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default KatsuraMenu;
