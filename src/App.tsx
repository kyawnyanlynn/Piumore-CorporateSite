import { Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage/TopPage";
import Notice from "./components/NoticePage/Notice";
import Notices from "./components/Notices/Notices";
import FCIndex from "./components/FCbusiness/FCIndex";
import RecruitIndex from "./components/RecruitmentInformation/RecruitIndex";
import CompanyIndex from "./components/CompanyProfile/CompanyIndex";
import KatsuraIndex from "./components/Brands/katsura/katsuraIndex";
import LauroIndex from "./components/Brands/Lauro/LauroIndex";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/notices/:slug" element={<Notice />} />
      <Route path="/fcindex" element={<FCIndex />} />
      <Route path="/companyindex" element={<CompanyIndex />} />
      <Route path="/recruitindex" element={<RecruitIndex />} />
      <Route path="/katsuraI" element={<KatsuraIndex />} />
      <Route path="/lauro" element={<LauroIndex />} />
      <Route path="/hinoya" element={<KatsuraIndex />} />
    </Routes>
  );
}

export default App;
