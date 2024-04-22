import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgeRestrictionPage from "./pages/AgeRestrictionPage";
import BettingPage from "./pages/BettingPage";
import DrawPage from "./pages/DrawPage";
import CalculationPage from "./pages/CalculationPage";
import RewardPage from "./pages/RewardPage";

function App() {
  const [bets, setBets] = useState([]);
  const [draw, setDraw] = useState([]);
  const [turns, setTurns] = useState(0);
  const [message, setMessage] = useState("");
  const [drawNumbersList, setDrawNumbersList] = useState([]);

  // Load bets from local storage when the component mounts
  useEffect(() => {
    const storedBets = JSON.parse(localStorage.getItem("bets")) || [];
    setBets(storedBets);
  }, []);

  function handleAddDrawNumbersList(numbers) {
    setDrawNumbersList((prevNumbers) => [...prevNumbers, numbers]);
  }

  function handleRestart() {
    //clean up state in storage
    localStorage.clear();
    setDrawNumbersList([]);
    setBets([]);
    setDraw([]);
    setTurns(0);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="age" element={<AgeRestrictionPage />} />
        <Route
          path="bet"
          element={<BettingPage bets={bets} setBets={setBets} />}
        />
        <Route
          path="draw"
          element={
            <DrawPage
              bets={bets}
              draw={draw}
              setDraw={setDraw}
              turns={turns}
              setTurns={setTurns}
              message={message}
              setMessage={setMessage}
              drawNumbersList={drawNumbersList}
              handleAddDrawNumbersList={handleAddDrawNumbersList}
            />
          }
        />
        <Route
          path="calc"
          element={
            <CalculationPage
              bets={bets}
              draw={draw}
              message={message}
              drawNumbersList={drawNumbersList}
              turns={turns}
              handleRestart={handleRestart}
            />
          }
        />
        <Route
          path="reward"
          element={
            <RewardPage bets={bets} draw={draw} handleRestart={handleRestart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
