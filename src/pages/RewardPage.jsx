import BackBtn from "../components/BackBtn";
import styles from "./RewardPage.module.css";

function RewardPage({ bets, draw, handleRestart }) {
  const winners = bets.filter((bet) => {
    return JSON.stringify(bet.numbers) === JSON.stringify(draw);
  });

  // map all the names from the winners array and sort alfabetically
  function handleFormatNames() {
    const namesAlfabeticaly = winners
      .map((winner) => winner.name)
      .sort((a, b) => a - b);

    // remove duplicates
    return [...new Set(namesAlfabeticaly)];
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h1>Parabéns</h1>

        <ul className={styles.namesList}>
          {handleFormatNames().map((name) => (
            <span key={name}>{name}</span>
          ))}
        </ul>
        <p>
          Para receber seu prêmio entre em contato pelo email betbuddy@gmail.com
          e envie seu nome e CPF
        </p>

        <BackBtn onClick={handleRestart} background={false} />
      </div>
    </div>
  );
}

export default RewardPage;
