import React from "react";
import styles from "./Dashboard.module.css";
import Card from "./Card";

class DashboardSection extends React.Component {
  handleProfile=async()=>{
    const token=localStorage.getItem("token");
    const email=localStorage.getItem("email");
    var profileHeader=new Headers();
    profileHeader.append("Authorization",'Bearer '+`${token}`);
    profileHeader.append("Content-Type", "application/x-www-form-urlencoded");
    var profileRequestOptions = {
      method: 'GET',
      headers: profileHeader,
      redirect: 'follow'
      }
    var profileResponse= await fetch(`https://api-docvalidation.onrender.com/user/profile/${email}`, profileRequestOptions);
    var profileData = JSON.parse(await profileResponse.text());
    if(profileResponse.status===200){
      window.open("/profile","_self")
    }     
  }
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
            alt="ProfileIcon"
            className={styles.profileIcon}
            onClick= { this.handleProfile}
          />
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
