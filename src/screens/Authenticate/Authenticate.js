import React from "react";
import styles from "./Authenticate.module.css";
//import Signup from "../Signup/Signup";
import Login from "../Login/Login";
//import Signup from "../Signup/Signup";

function Authentication() {
  return (
    <div className={styles.authPage}>
      {/* Header with Logo */}
      <header className={`${styles.flex} ${styles.header}`}>
        <img
          src="./Images/DocValidateAPI-logo.png"
          alt="DocValidateLogo"
          className={styles.logoImage}
        />
      </header>

      {/* Signup section */}
      {/* Routing will be done here */}
      <Login />

      {/* Footer with Project team info*/}
      <footer className={`${styles.flex} ${styles.footer}`}>
        <p className={styles.footer__text}>
          © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
          Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
          Swapnodeep Biswas
        </p>
      </footer>
    </div>
  );
}

export default Authentication;
