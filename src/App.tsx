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

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Mainvisual />
      <About />
      <Greeting />
      <Brands />
      <Recruitment />
      <Footer />
    </>
  );
}

export default App;
