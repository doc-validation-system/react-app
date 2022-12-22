import React from "react";
import styles from "./FlatButton.module.css";

class FlatButton extends React.Component {
  buttonData = {};
  constructor(buttonData) {
    super();
    this.buttonData = buttonData;
  }
  render() {
    return (
      <div>
        <button
          type="submit"
          className={styles.button}
          onClick={buttonData.handleButton}
        >
          {buttonData.buttonName}
        </button>
      </div>
    );
  }
}

export default FlatButton;
