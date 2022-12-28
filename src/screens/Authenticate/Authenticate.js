import React from "react";
import styles from "./Authenticate.module.css";
//import Signup from "../Signup/Signup";
//import Homepage from "../Home/Home";
import SignupSection from "../Signup/Signup";
// import LoginSection from "../Login/Login";
//import Signup from "../Signup/Signup";
// const root = ReactDOM.createRoot(document.getElementById('root'));

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
      <SignupSection />
      {/* <LoginSection/> */}

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
