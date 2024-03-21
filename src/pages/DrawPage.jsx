import { useNavigate } from "react-router-dom";
import styles from "./DrawPage.module.css";
import { useEffect } from "react";

function DrawPage({
  bets,
  setDraw,
  setTurns,
  turns,
  handleAddDrawNumbersList,
}) {
  const navigate = useNavigate();
  const allBetsNumbers = bets.map((bet) => bet.numbers);
  console.log(turns);

  useEffect(() => {
    function drawNumbers() {
      let foundMatch = false;
      let turns2 = 0;
      const allDrawNumbers = [];

      while (turns2 < 25 && !foundMatch) {
        console.log("while loop", turns2);

        // create an array with 5 random unique numbers
        const numbers = [];
        console.log(numbers);

        while (numbers.length < 5) {
          const randomNumber = Math.floor(Math.random() * 50) + 1;
          if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
            allDrawNumbers.push(randomNumber);
          }
        }

        // Sort the numbers for easier comparison
        const sortedNumbers = numbers.sort((a, b) => a - b);

        //stores the sorted number in the drawListNumbers for future calculations

        // Check if the drawn numbers match any bet
        allBetsNumbers.forEach((bet) => {
          const sortedBet = bet.sort((a, b) => a - b);
          if (JSON.stringify(sortedNumbers) === JSON.stringify(sortedBet)) {
            foundMatch = true;
          }
        });

        turns2++;
        setTurns(turns2);
        setDraw([1, 2, 3, 4, 5]);
        handleAddDrawNumbersList(numbers);
      }
      console.log(allDrawNumbers);
    }

    drawNumbers();
    console.log(turns);

    setTimeout(() => {
      navigate("/calc");
    }, 4000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.drawBox}>
        <div className={styles.loader}></div>
        <h1>Sorteando</h1>
      </div>
    </div>
  );
}

export default DrawPage;
