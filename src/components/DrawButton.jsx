import { Link } from "react-router-dom";
import styles from "./DrawButton.module.css";
import Modal from "./Modal";

function DrawButton() {
  return (
    <div className={styles.container}>
      <h1>Como Jogar</h1>
      <p>
        Depois de ter registrado as suas apostas você pode entrar na fase de
        sorteio clicando no botão abaixo. 5 números serão sorteados, caso não
        haja um ganhador 5 números serão sorteados novamente até um maximo de 25
        vezes.
      </p>
      <Modal>
        <Link to="/draw" className={styles.drawBtn}>
          Começar sorteio
        </Link>
      </Modal>
    </div>
  );
}

export default DrawButton;
