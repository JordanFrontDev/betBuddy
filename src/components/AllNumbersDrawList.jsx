import styles from "./AllNumbersDrawList.module.css";

// helper function
function randomIDNumber() {
  return Math.floor(Math.random() * 500000) + 1;
}

function AllNumbersDrawList({ drawNumbersList }) {
  return (
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
  );
}

export default AllNumbersDrawList;
