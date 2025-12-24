import Content from "./Content";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";

import "../../App.css";
function Notice() {
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
        threshold: 0.2, // 20% of the section visible
      }
    );

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Content />
        </main>

        <Footer />
      </div>
    </>
  );
}
export default Notice;
