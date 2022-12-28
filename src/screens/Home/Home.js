import React from "react";
import styles from "./Home.module.css";

function HomeScreen() {
  return (
    <div className={styles.homePageContainer}>
      {/* Navbar */}
      <header className={styles.header}>
        {/* Navbar Logo */}
        <img
          src="./Images/DocValidateAPI-Dark.png"
          alt="DocValidateLogo"
          className={styles.headerImage}
        />

        {/* Navbar options */}
        <div className={styles.headerOptions}>
          <a href={"/"} className={styles.headerOption}>
            Home
          </a>
          <a href={"/"} className={styles.headerOption}>
            About Us
          </a>
          <a href={"/"} className={styles.headerOption}>
            Contact Us
          </a>
          <a href={"/"} className={styles.headerOption}>
            Login
          </a>
        </div>
      </header>

      {/* Home Page Image */}
      <section className={styles.homeImageSection}>
        <img
          src="./Images/Home-Image.png"
          alt="HomeImage"
          className={styles.homeImage}
        />
      </section>

      {/* Home Page Header Text */}
      <div className={styles.homeHeaderText}>
        First Level of Document Verification
      </div>

      {/* Home Page Main Text */}
      <div className={styles.homeMainText}>An all-in-one solution for automating the document validation process is the DocValidationAPI. An OCR algorithm and a facial detection algorithms are used. Data extraction, validation and document quality checking are the key features.</div>
    </div>
  );
}

export default HomeScreen;
