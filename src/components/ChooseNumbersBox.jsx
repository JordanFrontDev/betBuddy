import styles from "./ChooseNumbersBox.module.css";

function ChooseNumbersBox({
  numbers,
  handleAddNumbers,
  handleRandomNumbers,
  handleDeleteNumbers,
  isSurprise,
}) {
  const sortedNumbersString = isSurprise
    ? Array(5).fill("?")
    : numbers.sort((a, b) => a - b).join(" ");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Faça a sua aposta</h1>
      <p className={styles.text}>
        Escolha 5 dos 50 números disponiveis. Apostas vencedoras são somente
        aquelas que acertaram os 5 números (não existe premiação para 4 ou menos
        números).
      </p>

      <div className={styles.numbers}>
        {Array.from({ length: 50 }, (_, i) => (
          <a
            className={`${styles.number} ${
              numbers.includes(i + 1) ? styles.selected : ""
            } `}
            key={i + 1}
            onClick={() => handleAddNumbers(i + 1)}
          >
            {i < 9 ? "0" + (i + 1) : i + 1}
          </a>
        ))}
      </div>
      <p className={styles.chosenNumbers}>{sortedNumbersString}</p>

      <div className={styles.btnBox}>
        <button
          className={`${styles.btn} ${isSurprise ? styles.selected : ""}`}
          onClick={handleRandomNumbers}
        >
          surpresinha
        </button>
        <button onClick={handleDeleteNumbers} className={styles.btn}>
          Limpar
        </button>
      </div>
    </div>
  );
}

export default ChooseNumbersBox;
