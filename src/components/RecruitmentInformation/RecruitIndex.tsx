import RercuitVisual from "./RecruitVisual";
import RecruitAbout from "./RecruitAbout";
import Recriutboss from "./Recruitboss";
import Employeebenefits from "./Employeebenefits";
import Recruitflow from "./Recruitflow";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RecruitIntex = () => {
  return (
    <>
      <Navbar />
      <main>
        <RercuitVisual />
        <RecruitAbout />
        <Recriutboss />
        <Employeebenefits />
        <Recruitflow />
      </main>
      <Footer />
    </>
  );
};
export default RecruitIntex;
