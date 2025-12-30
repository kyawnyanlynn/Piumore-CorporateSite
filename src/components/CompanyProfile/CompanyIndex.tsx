import CompanyAbout from "./CompanyAbout";
import CompanyManagement from "./CompanyManagement";
import CompanyChallenge from "./CompanyChallenge";
import Navbar from "../Navbar";

const CompanyIndex = () => {
  return (
    <>
      <Navbar />
      <CompanyAbout />
      <CompanyManagement />
      <CompanyChallenge />
    </>
  );
};
export default CompanyIndex;
