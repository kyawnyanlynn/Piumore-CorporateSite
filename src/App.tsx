import {
  Navbar,
  Mainvisual,
  Notice,
  About,
  Greeting,
  Brands,
  Recruitment,
} from "./components/HomePage";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
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
      <Navbar />
      <Mainvisual />
      <section className="reveal">
        <About />
      </section>

      <section className="reveal">
        <Greeting />
      </section>

      <section className="reveal">
        <Brands />
      </section>

      <section className="reveal">
        <Recruitment />
      </section>

      <section className="reveal">
        <Footer />
      </section>
    </>
  );
}

export default App;
