import { useState } from "react";
import styles from "./FormBets.module.css";

function FormBets({
  bets,
  setBets,
  numbers,
  surpriseNumbers,
  handleResetInputNumbers,
}) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [numbersError, setNumbersError] = useState(false);

  // submit function
  function handleSubmit(e) {
    e.preventDefault();

    // if no numbers were selected then do nothing
    if (numbers.length === 5 || surpriseNumbers.length === 5) {
      const newBet = {
        id: 1000 + bets.length,
        cpf,
        name,
        numbers: numbers.length > 0 ? numbers : surpriseNumbers,
      };
      setBets((prevBets) => [...prevBets, newBet]);

      // Store the new bet in local storage
      const allBets = JSON.parse(localStorage.getItem("bets")) || [];
      const updatedBets = [...allBets, newBet];
      localStorage.setItem("bets", JSON.stringify(updatedBets));

      // reset inputs
      setName("");
      setCpf("");
      handleResetInputNumbers();
      setNumbersError(false);
    } else {
      setNumbersError("Escolha 5 números");
    }
  }

  function handleValidateCpf(e) {
    const value = e.target.value.trim();
    if (Number(value) || value === "" || value == 0) {
      setCpf(value);
    }
  }

  function handleValidateName(e) {
    const value = e.target.value.trimStart().toLowerCase();
    if (!Number(value)) {
      setName(value);
    }

    console.log();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          value={name}
          onChange={handleValidateName}
          className={styles.inputField}
          required
        />
        <label className={styles.inputLabel}>Nome:</label>
      </div>

      <div className={styles.input}>
        <input
          maxLength="11"
          minLength="11"
          type="text"
          value={cpf}
          onChange={handleValidateCpf}
          className={styles.inputField}
          required
        />
        <label className={styles.inputLabel}>CPF:</label>
      </div>

      {numbersError && <span className={styles.error}>{numbersError}</span>}
      <button className={styles.actionButton}>Registrar Aposta</button>
    </form>
  );
}

export default FormBets;
