import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <NavBar />
      <section>
        <div>
          <h1>Teste a sua sorte!</h1>
          <p>
            A loteria que paga milhões para o acertador dos 5 números sorteados
          </p>
          <Link to="/age" className={styles.cta}>
            Aposte já
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
