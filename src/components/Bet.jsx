import styles from "./Bet.module.css";

function Bet({ bet }) {
  const sortedNumbers = bet.numbers.sort((a, b) => a - b);
  return (
    <li key={bet.id} className={styles.item}>
      <span>#{bet.id}</span>
      <h2>Nome: {bet.name}</h2>
      <h2>CPF: {bet.cpf}</h2>
      <ul>
        {sortedNumbers.map((number) => (
          <p key={number} className={styles.number}>
            {number < 10 ? "0" + number : number}
          </p>
        ))}
      </ul>
    </li>
  );
}

export default Bet;
