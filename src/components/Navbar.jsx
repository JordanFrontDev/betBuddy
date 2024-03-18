import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="/logo.png" alt="BetBuddy Logo" className={styles.logo} />
      </Link>
    </nav>
  );
}

export default NavBar;
