import { Link } from "react-router-dom";
import styles from "./BackBtn.module.css";

function BackBtn({ onClick, background = true }) {
  return (
    <div className={`${background ? styles.container : ""}`}>
      <Link to="/bet" onClick={onClick}>
        <button className={styles.backBtn}>Voltar a apostar</button>
      </Link>
    </div>
  );
}

export default BackBtn;
