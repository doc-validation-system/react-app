import React from "react";
import styles from "./Profile.module.css";

class ProfileSection extends React.Component {
  constructor(props){
    super(props);
    this.handleProfile();
  }
  async handleProfile(){
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
      <>
        {/* Header with Logo */}
        <header className={`${styles.flex} ${styles.header}`}>
          <img
            src="./Images/DocValidateAPI-logo.png"
            alt="DocValidateLogo"
            className={styles.logoImage}
          />
        </header>
        {/*Profile section*/}
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>Profile Details</div>
          {/*Profile details*/}
          <div className={styles.profileDetails}>
            {/* Individual Profile Details */}
            <p className={styles.profileDetailsField}>
              Organization Name:{" "}
              <span className={styles.profileDetailsValue}>
                {localStorage.getItem("organizationName")}
              </span>
            </p>
            <p className={styles.profileDetailsField}>
              Email:{" "}
              <span className={styles.profileDetailsValue}>
                {localStorage.getItem("email")}
              </span>
            </p>
          </div>
        </section>

        {/* Footer with Project team info*/}
        <footer className={`${styles.flex} ${styles.footer}`}>
          <p className={styles.footer__text}>
            © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
            Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
            Swapnodeep Biswas
          </p>
        </footer>
      </>
    );
  }
}
export default ProfileSection;
