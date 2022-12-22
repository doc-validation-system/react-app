import React from "react";
import styles from "./FlatButton.module.css";

export default function FlatButton({ buttonData }) {
  return (
    <div>
      <button type="submit" className={styles.button} onClick={buttonData.handleButton}>{buttonData.buttonName}</button>
    </div>
  );
}
