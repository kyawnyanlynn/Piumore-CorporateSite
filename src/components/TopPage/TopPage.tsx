import Navbar from "../Navbar";
import Mainvisual from "./Mainvisual";
import About from "./About";
import Greeting from "./Greeting";
import Brands from "./Brands";
import Recruitment from "./Recruitment";
import Footer from "../Footer";
import Notices from "./Notices";

import "../../App.css";
import { useEffect } from "react";

function TopPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <Mainvisual />
      <section className="reveal">
        <About />
      </section>

      <section className="reveal">
        <Greeting />
      </section>
      <section className="reveal">
        <Notices />
      </section>
      <section className="reveal">
        <Brands />
      </section>

      <section className="reveal">
        <Recruitment />
      </section>
    </>
  );
}

export default TopPage;
