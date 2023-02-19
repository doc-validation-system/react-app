import React from "react";
import styles from "./Loader.module.css";

class Loader extends React.Component {
    render() {
        return (
            <div className={styles.loaderSection}>
                <div className={styles.spinner}>
                    <div className={styles.rect1}></div>
                    <div className={styles.rect2}></div>
                    <div className={styles.rect3}></div>
                    <div className={styles.rect4}></div>
                    <div className={styles.rect5}></div>
                </div>
                <img
                    src="./Images/DocValidateAPI-logo.png"
                    alt="DocValidateLogo"
                    className={styles.logoImage}
                />
            </div>
        )
    }
}

export default Loader;