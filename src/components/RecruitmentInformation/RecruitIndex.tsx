import RercuitVisual from "./RecruitVisual";
import RecruitAbout from "./RecruitAbout";
import Recriutboss from "./Recruitboss";
import Employeebenefits from "./Employeebenefits";
import Recruitflow from "./Recruitflow";
import Navbar from "../Navbar";

const RecruitIntex = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <RercuitVisual />
        <RecruitAbout />
        <Recriutboss />
        <Employeebenefits />
        <Recruitflow />
      </main>
    </>
  );
};
export default RecruitIntex;
