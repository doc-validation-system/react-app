import React from "react";
import styles from "./Authenticate.module.css";
import AuthRouter from "./AuthRouter";

function Authentication() {
  return (
    <div className={styles.authPage}>
       {/* Header with Logo */}
       {/* <header className={`${styles.flex} ${styles.header}`}>
         <img
    //       src="./Images/DocValidateAPI-logo.png" */}
           {/* alt="DocValidateLogo"
           className={styles.logoImage}
         />
       </header> */}

      {/* Signup section */}
      {/* Routing will be done here */}
      {/* <SignupSection /> */}
      {/* <LoginSection/> */}
      <AuthRouter/>

       {/* Footer with Project team info
       <footer className={`${styles.flex} ${styles.footer}`}>
         <p className={styles.footer__text}>
           © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
           Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
           Swapnodeep Biswas
         </p>
       </footer> */}
    </div>
  );
}

export default Authentication;
