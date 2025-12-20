import "./Css/footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#B42423] text-white">
      <div className="mx-auto w-[92%] lg:w-[90%] px-4 lg:px-0 py-12 lg:flex justify-between">
        {/* Company info (always top-left) */}
        <div className="mb-10 text-sm">
          <p className="font-medium text-[18px]">株式会社PIUMORE</p>
          <p>本社：東京都千代田区神田神保町1-35-16 O&amp;Oビル1F</p>
          <p>TEL：03-3294-1233</p>
        </div>

        {/* Menu area */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm lg:grid-cols-3 lg:gap-x-24">
          <button
            className="font-medium footer-item text-left"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            TOP
          </button>

          <p className="font-medium footer-item">会社概要</p>

          <a className="footer-item" href="">
            代表挨拶
          </a>
          <a className="footer-item" href="">
            経営理念
          </a>

          <a className="footer-item" href="">
            ブランド
          </a>
          <p className="font-medium footer-item">採用情報</p>

          <a className="footer-item" href="">
            お知らせ
          </a>
          <a className="footer-item" href="">
            エントリー
          </a>
        </div>

        {/* Bottom */}
      </div>
      <div className="mt-14 text-center text-xs opacity-90">
        ©︎ PIUMORE INC.
      </div>
    </footer>
  );
};

export default Footer;
