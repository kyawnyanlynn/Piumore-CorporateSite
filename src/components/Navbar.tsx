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
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
          >
            <img src={logo} alt="PIUMORE" className="h-10 cursor-pointer" />
          </Link>

          <ul className="hidden md:flex gap-9 font-medium text-lg">
            <li>
              <Link
                to="/companyindex"
                className="nav-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                企業情報
              </Link>
            </li>
            <li>
              <Link
                to="/fcindex"
                className="nav-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                企業提携
              </Link>
            </li>
            <li>
              <Link
                to="/brandscollection"
                className="nav-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                ブランド
              </Link>
            </li>
            <li>
              <Link
                to="/notices"
                className="nav-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                お知らせ
              </Link>
            </li>
            <li>
              <Link
                to="/recruitindex"
                className="nav-item"
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                採用情報
              </Link>
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
      />

      <nav
        className={`offscreen-menu md:hidden ${
          isOpen ? "open" : ""
        } flex items-center justify-center`}
      >
        <div className="h-20" />

        <ul className="flex flex-col gap-8 px-8 pt-6 text-2xl font-medium items-center justify-between">
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/companyindex"
              className="nav-item"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              企業情報
            </Link>
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/fcindex"
              className="nav-item"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              企業提携
            </Link>
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/brandscollection"
              className="nav-item"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              ブランド
            </Link>
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/notices"
              className="nav-item"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              お知らせ
            </Link>
          </li>
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/recruitindex"
              className="nav-item"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              採用情報
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
