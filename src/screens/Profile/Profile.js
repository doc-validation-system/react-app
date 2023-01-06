import React from "react";
import styles from "./Profile.module.css"

class ProfileSection extends React.Component{
    render(){
        return(
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
                <div className={styles.profileBox}>
                    <div className={styles.profileHeader}>Profile Details</div>
                </div>
                {/*Profile details*/}
                <div className={styles.profileDetails}>
                    <p className={styles.profileDetailsField}>
                        Organization Name: <span className={styles.profileDetailsValue}>{localStorage.getItem("organizationName")}</span>
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