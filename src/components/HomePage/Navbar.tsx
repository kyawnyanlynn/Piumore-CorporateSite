import { useState } from "react";
import "../Css/navbar.css";
import { menu, close, logo } from "../../images";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-screen h-20 z-10 bg-white fixed top-0">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center ">
          <img
            src={logo}
            alt="ロゴ"
            className="sm:ml-10 ss:ml-10 md:ml-3 w-full h-15 logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className="flex items-center font-medium text-lg">
          <ul className="hidden md:flex gap-9">
            <li className="nav-item">企業情報</li>
            <li className="nav-item">ブランド</li>
            <li className="nav-item">お知らせ</li>
            <li className="nav-item">採用情報</li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : menu}
            alt="メニュー"
            className="w-7 h-7 object-contain mr-10"
          />
        </div>
      </div>
      <ul
        className={
          toggle ? "absolute bg-amber-900 w-full px-8 md:hidden" : "hidden"
        }
      >
        <li className="nav-item">企業情報</li>
        <li className="nav-item">ブランド</li>
        <li className="nav-item">お知らせ</li>
        <li className="nav-item">採用情報</li>
      </ul>
    </div>
  );
};
export default Navbar;
