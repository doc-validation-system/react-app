import React from "react";
import styles from "./Dashboard.module.css";
import Card from "./Card";

class DashboardSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.getToken(),
      showDropdown: false,
    };
  }

  getToken = () => {
    let token = localStorage.getItem("token");
    return token ? true : false;
  };

  viewDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleLogout = () => {
    localStorage.clear();
  };

  handleProfile = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    var profileHeader = new Headers();
    profileHeader.append("Authorization", "Bearer " + `${token}`);
    profileHeader.append("Content-Type", "application/x-www-form-urlencoded");
    var profileRequestOptions = {
      method: "GET",
      headers: profileHeader,
      redirect: "follow",
    };
    var profileResponse = await fetch(
      `https://api-docvalidation.onrender.com/user/profile/${email}`,
      profileRequestOptions
    );
    var profileData = JSON.parse(await profileResponse.text());
    if (profileResponse.status === 200) {
      window.open("/profile", "_self");
    }
  };
  render() {
    return (
      <div className={styles.dashboardPage}>
        {/* Header with Logo and Profile Icon */}
        <header className={styles.header}>
          <img
            src="./Images/DocValidateAPI-logo.png"
            alt="DocValidateLogo"
            className={styles.logoImage}
          />
          <img
            src="./Images/ProfileIcon.png"
            id="ProfileIcon"
            alt="ProfileIcon"
            className={styles.profileIcon}
            onClick={this.viewDropdown}
          />

          {this.state.showDropdown && <div className={styles.profileDropdown} onInput={this.viewDropdown}>
            <div className={styles.dropdownMenu} onClick={() => {this.viewDropdown(); this.handleProfile();}}>
              My Profile
            </div>
            <a
              href={"/login"}
              className={styles.dropdownMenu}
              onClick={() => {this.viewDropdown(); this.handleLogout();}}
            >
              Logout
              <div className={styles.logoutIcon}>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </div>
            </a>
          </div>}
        </header>

        <section className={styles.dashboardCards}>
          <Card
            cardData={{
              cardImage: "./Images/ApiKeyImg.png",
              cardText: "Generate API Key",
            }}
          />
          <Card
            cardData={{
              cardImage: "./Images/TestApiImg.png",
              cardText: "Test API",
            }}
          />
          <Card
            cardData={{ cardImage: "./Images/DocsImg.png", cardText: "Docs" }}
          />
        </section>

        {/* Footer with Project team info*/}
        <footer className={styles.footer}>
          <p className={styles.footer__text}>
            © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
            Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
            Swapnodeep Biswas
          </p>
        </footer>
      </div>
    );
  }
}

export default DashboardSection;
