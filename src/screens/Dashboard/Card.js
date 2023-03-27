import React from "react";
import styles from "./Card.module.css";

class Card extends React.Component {
  cardData = {};
  constructor(props) {
    super(props);
    this.cardData = props.cardData;
    this.navigate = props.navigate;
  }

  render() {
    return (
      <div className={styles.card}>
        <img src={this.cardData.cardImage} alt="" className={styles.cardImage} />
        <div className={styles.cardText}>{this.cardData.cardText}</div>
      </div>
    );
  }
}

export default Card;
