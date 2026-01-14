import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#B42423] text-white">
      <div className="mx-auto w-[92%] lg:w-[90%] px-4 lg:px-0 py-12 lg:flex justify-between">
        <div className="mb-10 text-sm">
          <p className="font-medium text-[18px]">株式会社PIUMORE</p>
          <p>本社：東京都千代田区神田神保町1-35-16 O&amp;Oビル1F</p>
          <p>TEL：03-3294-1233</p>
        </div>

        {/* Menu area */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm lg:grid-cols-3 lg:gap-x-24">
          <button
            type="button"
            className="font-medium footer-item text-left"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
              document.body.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            TOP
          </button>
          <Link className="footer-item" to="/companyindex">
            会社概要
          </Link>
          <Link className="footer-item" to="/message">
            代表挨拶
          </Link>
          <Link className="footer-item" to="/companyindex">
            経営理念
          </Link>
          <Link className="footer-item" to="/brandscollection">
            ブランド
          </Link>
          <Link className="footer-item" to="/recruitindex">
            採用情報
          </Link>
          <Link className="footer-item" to="/notices">
            お知らせ
          </Link>
          <a
            className="footer-item"
            href="https://www.careermap.jp/corporations/108006/jobs"
          >
            エントリー
          </a>
        </div>
      </div>
      <div className="mt-14 text-center text-xs opacity-90">
        ©︎ PIUMORE INC.
      </div>
    </footer>
  );
};

export default Footer;
