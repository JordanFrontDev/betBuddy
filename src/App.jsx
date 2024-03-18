import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgeRestrictionPage from "./pages/AgeRestrictionPage";
import BettingPage from "./pages/BettingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="age" element={<AgeRestrictionPage />} />
        <Route path="bet" element={<BettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
