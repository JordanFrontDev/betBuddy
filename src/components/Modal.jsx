import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      // Close the modal when the Escape key is pressed
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    // Add the event listener when the component is mounted
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={toggleModal} className={styles.drawBtn}>
        Começar sorteio
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <h1>Tem certeza que deseja começar o sorteio?</h1>
          <div className={styles.btnBox}>
            <button onClick={toggleModal}>Fechar</button>
            {children}
          </div>
        </div>
      )}

      {isOpen && <div className={styles.overlay} onClick={toggleModal}></div>}
    </div>
  );
}

export default Modal;
