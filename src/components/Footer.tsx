const Footer = () => {
  return (
    <div className="w-full bg-[#B42423] text-white py-10">
      <div className="w-[90%] m-auto flex justify-between">
        {/* 左側：会社情報 */}
        <div className="space-y-2 text-sm">
          <p className="font-medium">株式会社PIUMORE</p>
          <p>本社：東京都千代田区神田神保町1-35-16O&Oビル１F</p>
          <p>TEL：033-294-1233</p>
        </div>

        {/* 右側：メニューの3カラム */}
        <div className="flex gap-20 text-sm">
          {/* カラム1 */}
          <div className="flex flex-col space-y-1">
            <p className="font-medium">TOP</p>
            <a href="">代表挨拶</a>
            <a href="">ブランド</a>
            <a href="">お知らせ</a>
          </div>

          {/* カラム2 */}
          <div className="flex flex-col space-y-1">
            <p className="font-medium">会社概要</p>
            <a href="">経営理念</a>
          </div>

          {/* カラム3 */}
          <div className="flex flex-col space-y-1">
            <p className="font-medium">採用情報</p>
            <a href="">エントリー</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
