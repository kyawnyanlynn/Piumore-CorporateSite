import "./Css/footer.css";
const Footer = () => {
  return (
    <>
      <div className="bg-[#B42423] text-white">
        <div className="w-[90%] m-auto flex justify-between p-8">
          {/* 左側 */}
          <div className="space-y-2 text-sm">
            <p className="font-medium text-[18px]">株式会社PIUMORE</p>
            <p className="">本社：東京都千代田区神田神保町1-35-16O&Oビル１F</p>
            <p>TEL：033-294-1233</p>
          </div>

          {/* 右側：メニュー */}
          <div className="flex gap-20 text-sm">
            {/* カラム1 */}
            <div className="flex flex-col space-y-1">
              <p
                className="font-medium footer-item"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                TOP
              </p>

              <a className="footer-item" href="">
                代表挨拶
              </a>
              <a className="footer-item" href="">
                ブランド
              </a>
              <a className="footer-item" href="">
                お知らせ
              </a>
            </div>

            {/* カラム2 */}
            <div className="flex flex-col space-y-1">
              <p className="font-medium footer-item">会社概要</p>
              <a className="footer-item" href="">
                経営理念
              </a>
            </div>

            {/* カラム3 */}
            <div className="flex flex-col space-y-1">
              <p className="font-medium footer-item">採用情報</p>
              <a className="footer-item" href="">
                エントリー
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#B42423] text-center mt-6">
          <small>©︎PIUMORE INC.</small>
        </div>
      </div>
    </>
  );
};
export default Footer;
