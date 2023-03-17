import React from "react";
import styles from "./TestAPIModal.module.css";
import ModalDetails from "../../service/ModalDetails/ModalDetails";

class TestAPIModal extends React.Component {
  render() {
    return (
      <div className={styles.testApiModal}>
        {/* Validation Score Section */}
        <section className={styles.testApiModal__ValidationScoreSection}>
          {/* Section Logo */}

          <img
            src="./Images/DocValidateAPI-logo.png"
            alt="DocValidateLogo"
            className={styles.validationScoreSection__Logo}
          />

          {/* Section Heading*/}
          <div className={styles.validationScoreSection__Heading}>
            <span style={{ fontSize: "24px" }}>V</span>ALIDATION SCORE
          </div>

          {/* Validation Score Progress Bar */}
          <div className={styles.validationScoreSection__ProgressBar}>
            {/* Outer and Inner Rings */}
            <div className={styles.progressBar__OuterRing}>
              <div className={styles.progressBar__InnerRing}>
                <div className={styles.progressBar__ScorePercentage}>80%</div>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#3959dd" />
                  <stop offset="100%" stop-color="#4460da" />
                </linearGradient>
              </defs>
              <circle cx="96" cy="64" r="54" stroke-linecap="round" />
            </svg>
          </div>

          {/* Section Content */}
          <div className={styles.validationScoreSection__Content}>
            This score includes all the validated data from the submitted
            documents, and also the status of the corresponding human face
            detection
          </div>

          {/* Section Footer */}
          <div className={styles.validationScoreSection__Footer}>
            Powered by
            <br />
            DocValidation TestAPI Engine
          </div>
        </section>

        {/* Validation Details Section */}
        <section className={styles.testApiModal__ValidationDetailsSection}>
          {/* Close Icon */}
          <img
            src="./Images/CloseIcon.png"
            alt="CloseIcon"
            className={styles.validationDetailsSection__CloseButton}
          />

          {/* Section Heading */}
          <div className={styles.validationDetailsSection__Heading}>
            Validation Details
          </div>

          {/* Aadhar Card Details */}
          <div className={styles.validationDetailsSection__Card}>
            {/* Card Heading */}
            <div className={styles.cardDetails__Heading}>
              <span style={{ fontSize: "20px" }}>A</span>ADHAR CARD DETAILS
            </div>
            <ModalDetails
              uid="2123 4567 8910
"
              name="Swapnodeep Biswas"
              dob="28-02-2000"
              faceDetected="Successful"
            />
          </div>

          {/* Pan Card Details */}
          <div className={styles.validationDetailsSection__Card}>
            {/* Card Heading */}
            <div className={styles.cardDetails__Heading}>
              <span style={{ fontSize: "20px" }}>P</span>AN CARD DETAILS
            </div>
            <ModalDetails
              uid="ABCDE1234A
"
              name="Swapnodeep Biswas"
              dob="----------------"
              faceDetected="Successful"
            />
          </div>

          {/* Voter Card Details */}
          <div className={styles.validationDetailsSection__Card}>
            {/* Card Heading */}
            <div className={styles.cardDetails__Heading}>
              <span style={{ fontSize: "20px" }}>V</span>OTER CARD DETAILS
            </div>
            <ModalDetails
              uid="ABC1234567
"
              name="Swapnodeep Biswas"
              dob="28-02-2000"
              faceDetected="Unsuccessful"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default TestAPIModal;
