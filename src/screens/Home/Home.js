import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.getToken(),
    }
  }

  getToken = () => {
    let token = localStorage.getItem("token");
    return token ? true : false;
  };

  handleLogout = () => {
    localStorage.clear();
  };

  render() {
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
            <span className={styles.headerOption} onClick={() => this.props.navigate("/")}>
              Home
            </span>
            {this.state.loggedIn && (
              <span className={styles.headerOption} onClick={() => this.props.navigate("/dashboard")}>
                Dashboard
              </span>
            )}
            <div className={styles.headerOption} onClick={() => this.props.navigate("/about")}>
              About Us
            </div>
            <a href={"/"} className={styles.headerOption}>
              Contact Us
            </a>
            {this.state.loggedIn ? (
              <a
                href={"/"}
                className={styles.headerOption}
                onClick={this.handleLogout}
              >
                Logout
              </a>
            ) : (
              <span className={styles.headerOption} onClick={() => this.props.navigate("/login")}>
                Login
              </span>
            )}
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
        <div className={styles.homeMainText}>
          An all-in-one solution for automating the document validation process
          is the DocValidationAPI. An OCR algorithm and a facial detection
          algorithms are used. Data extraction, validation and document quality
          checking are the key features.
        </div>

        {/* Learn More Button */}
        <div className={styles.homeCta}>
          <div className={styles.homeCtaButton}>Learn More</div>
        </div>

        {/* Footer */}
        <footer className={styles.homeFooter}>
          © 2022 DocValidateAPI. All rights reserved.
          <br />A project by Aditi Chatterjee, Charchika Biswas, Kaustav Halder,
          Sourashis Paul and Swapnodeep Biswas
        </footer>
      </div>
    );
  }
}

function HomeNavigate() {
  const navigate = useNavigate();
  return <HomeScreen navigate={navigate} />;
}

export default HomeNavigate;
