import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

import styles from "./AgeRestrictionPage.module.css";

function AgeRestrictionPage() {
  return (
    <main>
      <NavBar />

      <section className={styles.restriction}>
        <div>
          <h1 className={styles.text}>Você tem mais de 18 anos?</h1>
          <ul className={styles.linkBox}>
            <Link to="/bet">Sim</Link>
            <Link to="/">Não</Link>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default AgeRestrictionPage;
