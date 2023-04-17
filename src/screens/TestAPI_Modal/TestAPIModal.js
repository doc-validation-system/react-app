import React from "react";
import styles from "./TestAPIModal.module.css";
import ModalDetails from "../../service/ModalDetails/ModalDetails";

class TestAPIModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = props.closeModal;
    this.formResult = props.formResult;
  }

  componentDidMount() {
    console.log("Accuracy: ", this.formResult.decodedData.accuracy);

    // The accuracy value from the server
    let accuracy = Math.ceil(this.formResult.decodedData.accuracy);
    
    // Calculated value for the circular progress bar
    let percentVal = Math.ceil(472 - (accuracy / 100) * (472 - 134));

    let counter = 472;
    setInterval(() => {
      if (counter === percentVal) clearInterval(counter);
      else {
        document.getElementById("circle").style.strokeDashoffset = --counter;
      }
    }, 16);
  }

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
                <div className={styles.progressBar__ScorePercentage}>
                  {this.formResult.decodedData.accuracy}%
                </div>
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
                  <stop offset="0%" stopColor="#3959dd" />
                  <stop offset="100%" stopColor="#4460da" />
                </linearGradient>
              </defs>
              <circle
                id="circle"
                cx="96"
                cy="64"
                r="54"
                strokeLinecap="round"
                // style={circleAnim}
              />
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
            © DocValidation TestAPI Engine
          </div>
        </section>

        {/* Validation Details Section */}
        <section className={styles.testApiModal__ValidationDetailsSection}>
          {/* Close Icon */}
          <img
            src="./Images/CloseIcon.png"
            alt="CloseIcon"
            className={styles.validationDetailsSection__CloseButton}
            onClick={this.closeModal}
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
              uid={this.formResult.aadharId}
              name={this.formResult.name}
              dob={this.formResult.dob}
              validationFlags={this.formResult.decodedData.data.aadhar}
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
              uid={this.formResult.panId}
              name={this.formResult.name}
              dob={this.formResult.dob}
              validationFlags={this.formResult.decodedData.data.pan}
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
              uid={this.formResult.voterId}
              name={this.formResult.name}
              dob={this.formResult.dob}
              validationFlags={this.formResult.decodedData.data.voter}
              faceDetected="Successful"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default TestAPIModal;
