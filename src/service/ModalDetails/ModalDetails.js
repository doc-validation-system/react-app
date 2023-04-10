import React from "react";
import styles from "./ModalDetails.module.css";

class ModalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.uid = props.uid;
    this.name = props.name;
    this.dob = props.dob;
    this.faceDetected = props.faceDetected;
    this.validationFlags = props.validationFlags;
  }

  validationMark = (flag) => {
    return flag ? "CorrectIcon.png" : "WrongIcon.png";
  };

  render() {
    return (
      <>
        {/* Card Fields */}
        <div className={styles.cardDetails__Area}>
          {/* UID Field */}
          <div className={styles.cardDetails__Field}>
            UID:
            {/* UID Value */}
            <div className={styles.field__Value}>{this.uid}</div>
            {/* Field Check mark */}
            <img
              src={`./Images/${this.validationMark(this.validationFlags.id)}`}
              alt=""
              className={styles.field__CheckMark}
            />
          </div>

          {/* Name Field */}
          <div className={styles.cardDetails__Field}>
            NAME:
            {/* Name Value */}
            <div className={styles.field__Value}>{this.name}</div>
            {/* Field Check mark */}
            <img
              src={`./Images/${this.validationMark(this.validationFlags.name)}`}
              alt=""
              className={styles.field__CheckMark}
            />
          </div>

          {/* DOB Field */}
          <div className={styles.cardDetails__Field}>
            DOB:
            {/* DOB Value */}
            <div className={styles.field__Value}>{this.dob}</div>
            {/* Field Check mark */}
            <img
              src={`./Images/${this.validationMark(this.validationFlags.dob)}`}
              alt=""
              className={styles.field__CheckMark}
            />
          </div>

          {/* Face Detection Field */}
          <div className={styles.cardDetails__Field}>
            FACE DETECTION:
            {/* DOB Value */}
            <div className={styles.field__Value}>{this.faceDetected}</div>
            {/* Field Check mark */}
            <img
              src="./Images/CorrectIcon.png"
              alt="Correct"
              className={styles.field__CheckMark}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ModalDetails;
