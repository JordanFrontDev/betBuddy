import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import BetsList from "../components/BetsList";
import NavBar from "../components/Navbar";
import styles from "./CalculationPage.module.css";

function CalculationPage({
  bets,
  draw,
  drawNumbersList,
  turns,
  handleRestart,
}) {
  const winners = bets.filter((bet) => {
    return JSON.stringify(bet.numbers) === JSON.stringify(draw);
  });

  const numbers = bets.map((bet) => bet.numbers);

  function countNumbers() {
    console.log(numbers, " numbers");
    const numberCountsMap = new Map();

    // count how many times each number was bet
    numbers.forEach((betNumbers) => {
      betNumbers.forEach((number) => {
        const count = numberCountsMap.get(number) || 0;
        numberCountsMap.set(number, count + 1);
      });
    });

    // sorted based on how many bets
    const sortedNumbers = [...numberCountsMap.entries()].sort(
      ([, countA], [, countB]) => countB - countA
    );

    return sortedNumbers;
  }

  // destructuring sortedNumbers from function
  const sortedNumbers = countNumbers();

  function randomIDNumber() {
    return Math.floor(Math.random() * 500000) + 1;
  }

  console.log(sortedNumbers);
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        <h1>Apuração</h1>
        <h3 className={styles.title}>Lista de números sorteados</h3>
        <ul className={styles.numbersList}>
          {drawNumbersList.map((number) => {
            return (
              <li key={randomIDNumber()}>
                <span className={styles.number}>
                  {number[0] <= 9 ? "0" + number[0] : number[0]}
                </span>
                <span className={styles.number}>
                  {number[1] <= 9 ? "0" + number[1] : number[1]}
                </span>
                <span className={styles.number}>
                  {number[2] <= 9 ? "0" + number[2] : number[2]}
                </span>
                <span className={styles.number}>
                  {number[3] <= 9 ? "0" + number[3] : number[3]}
                </span>
                <span className={styles.number}>
                  {number[4] <= 9 ? "0" + number[4] : number[4]}
                </span>
              </li>
            );
          })}
        </ul>
        <h3 className={styles.title}>Rodadas de sorteios realizadas:</h3>
        <span className={styles.item}>{turns}</span>
        <h3 className={styles.title}>Quantidade de apostas vencedoras:</h3>
        <span className={styles.item}>{winners ? winners.length : 0}</span>
        <h3 className={styles.title}>
          {winners.length === 0 && <p>Não houve vencedores</p>}
        </h3>

        <div>
          {winners.length > 0 && <BetsList bets={winners} win={true} />}
        </div>

        <div className={styles.titlesList}>
          <h3 className={`${styles.title} ${styles.titleBet}`}>
            Número apostado
          </h3>
          <h3 className={`${styles.title} ${styles.titleBet}`}>
            Quantidade de apostas
          </h3>
        </div>

        <ul className={styles.box}>
          {sortedNumbers.map((numbers) => (
            <li key={randomIDNumber()} className={styles.listItem}>
              <span>{numbers[0] <= 9 ? "0" + numbers[0] : numbers[0]}</span>
              <span>{numbers[1] <= 9 ? "0" + numbers[1] : numbers[1]}</span>
            </li>
          ))}
        </ul>

        {winners.length > 0 && (
          <div className={styles.rewardContainer}>
            <Link to="/reward" className={styles.rewardBtn}>
              premiação
            </Link>
          </div>
        )}
        {winners.length === 0 && <BackBtn onClick={handleRestart} />}
      </main>
    </div>
  );
}

export default CalculationPage;
