import { useState } from "react";

import NavBar from "../components/Navbar";
import BetsList from "../components/BetsList";
import ChooseNumbersBox from "../components/ChooseNumbersBox";
import styles from "./BettingPage.module.css";
import FormBets from "../components/FormBets";
import DrawButton from "../components/DrawButton";

function BettingPhase({ bets, setBets }) {
  const [numbers, setNumbers] = useState([]);
  const [isSurprise, setIsSurprise] = useState(false);
  const [surpriseNumbers, setSurpriseNumbers] = useState([]);

  function handleAddNumbers(number) {
    if (!isSurprise) {
      if (numbers.includes(number)) {
        // If the number is already in the array, remove it
        setNumbers((prevNumbers) => prevNumbers.filter((n) => n !== number));
      }
      if (!numbers.includes(number) && numbers.length < 5) {
        // If the number is not in the array, add it
        setNumbers((prevNumbers) => [...prevNumbers, number]);
      }
    }
  }

  function handleDeleteNumbers() {
    setNumbers([]);
    setIsSurprise(false);
    setSurpriseNumbers([]);
  }

  function handleRandomNumbers() {
    setNumbers([]);
    setIsSurprise((prevValue) => !prevValue);

    if (!isSurprise) {
      const randomNumbers = new Set();

      while (randomNumbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        randomNumbers.add(randomNumber);
      }

      setSurpriseNumbers(Array.from(randomNumbers));
    } else {
      setSurpriseNumbers([]);
    }
  }

  function handleResetInputNumbers() {
    setNumbers([]);
    setSurpriseNumbers([]);
    setIsSurprise(false);
  }

  return (
    <div>
      <NavBar />

      <main className={styles.main}>
        <ChooseNumbersBox
          numbers={numbers}
          handleAddNumbers={handleAddNumbers}
          handleDeleteNumbers={handleDeleteNumbers}
          handleRandomNumbers={handleRandomNumbers}
          isSurprise={isSurprise}
        />

        <FormBets
          bets={bets}
          setBets={setBets}
          numbers={numbers}
          surpriseNumbers={surpriseNumbers}
          handleResetInputNumbers={handleResetInputNumbers}
        />

        <DrawButton />

        <BetsList bets={bets} />
      </main>
    </div>
  );
}

export default BettingPhase;
