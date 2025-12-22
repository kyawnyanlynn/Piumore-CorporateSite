import { Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage/TopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
}

export default App;
