import CompanyAbout from "./CompanyAbout";
import CompanyManagement from "./CompanyManagement";
import CompanyChallenge from "./CompanyChallenge";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CompanyIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <CompanyAbout />
        <CompanyManagement />
        <CompanyChallenge />
      </main>
      <Footer />
    </>
  );
};
export default CompanyIndex;
