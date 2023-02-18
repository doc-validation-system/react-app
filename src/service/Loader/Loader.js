import React from "react";
import styles from "./Loader.module.css";

class Loader extends React.Component{
    render() {
        return (
            <div className={styles.spinner}>
                <div className={styles.rect1}></div>
                <div className={styles.rect2}></div>
                <div className={styles.rect3}></div>
                <div className={styles.rect4}></div>
                <div className={styles.rect5}></div>
            </div>
        )
    }
}

export default Loader;