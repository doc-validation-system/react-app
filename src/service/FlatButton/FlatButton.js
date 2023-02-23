import React from "react";
import styles from "./FlatButton.module.css";

class FlatButton extends React.Component {
  buttonData = {};
  constructor(props) {
    super(props);
    this.buttonData = props.buttonData;
  }
  
  render() {
    return (
      <div>
        <div className={styles.button} onClick={this.buttonData.handleButton}>
          {this.buttonData.buttonName}
        </div>
      </div>
    );
  }
}

export default FlatButton;
