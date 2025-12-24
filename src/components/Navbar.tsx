// Navbar.tsx
import { useEffect, useState } from "react";
import { logo } from "../images";
import { Link } from "react-router-dom";

import "./navbar.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header fixed top-0 left-0 w-full h-20 bg-white z-1002">
        <div className="flex justify-between items-center w-full h-full max-w-[1240px] mx-auto px-4">
          <Link to="/">
            <img src={logo} alt="PIUMORE" className="h-10 cursor-pointer" />
          </Link>

          <ul className="hidden md:flex gap-9 font-medium text-lg">
            <li>
              <a className="nav-item">企業情報</a>
            </li>
            <li>
              <a className="nav-item">企業提携</a>
            </li>
            <li>
              <a className="nav-item">ブランド</a>
            </li>
            <li>
              <Link to="/notices" className="nav-item">
                お知らせ
              </Link>
            </li>
            <li>
              <a className="nav-item">採用情報</a>
            </li>
          </ul>

          <button
            type="button"
            className={`md:hidden ham-menu ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay md:hidden ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`offscreen-menu md:hidden ${
          isOpen ? "open" : ""
        } flex items-center justify-center`}
        aria-hidden={!isOpen}
      >
        <div className="h-20" />

        <ul className="flex flex-col gap-8 px-8 pt-6 text-2xl font-medium items-center justify-between">
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            企業情報
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            企業提携
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            ブランド
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            お知らせ
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            採用情報
          </li>
        </ul>
      </nav>
    </>
  );
}