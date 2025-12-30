import { useState } from "react";

import { menu, close, logo } from "../../images";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="flex top-0 left-0 w-full h-20 bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="ロゴ"
            className="sm:ml-10 ss:ml-10 md:ml-3 w-full h-15"
          />
        </div>
        <div className="flex items-center ">
          <ul className="hidden md:flex space-x-8">
            <li>企業情報</li>
            <li>ブランド</li>
            <li>お知らせ</li>
            <li>採用情報</li>
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
        <li>企業情報</li>
        <li>ブランド</li>
        <li>お知らせ</li>
        <li>採用情報</li>
      </ul>
    </div>
  );
};
export default Navbar;
