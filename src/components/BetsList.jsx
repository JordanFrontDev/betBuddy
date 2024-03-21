import styles from "./BetsList.module.css";
import Bet from "./Bet";

function BetsList({ bets, win = false }) {
  return (
    <>
      {win ? (
        <h1 className={styles.title}>Lista de apostas vencedoras</h1>
      ) : (
        <h1 className={styles.title}>Apostas registradas até o momento</h1>
      )}

      {/* If there's at least 1 bet then render this */}
      {bets.length > 0 && (
        <ul className={styles.list}>
          {bets.map((bet) => (
            <Bet bet={bet} key={bet.id} />
          ))}
        </ul>
      )}

      {bets.length === 0 && (
        <h2 className={styles.noBet}>
          Você ainda não registrou nenhuma aposta
        </h2>
      )}
    </>
  );
}

export default BetsList;
