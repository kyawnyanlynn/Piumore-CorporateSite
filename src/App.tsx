import { Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage/TopPage";
import Notice from "./components/NoticePage/Notice";
import Notices from "./components/Notices/Notices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/notices/:slug" element={<Notice />} />
    </Routes>
  );
}

export default App;
