import React from "react";
import styles from "./TestAPI.module.css";
import FileCard from "../../service/FileCard/FileCard";
import JSAlert from "js-alert";

class TestAPISection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      uidAadhar: "",
      uidPan: "",
      uidVoter: "",
      address: "",
      uploadedFile: [],
    };
  }

  name = "";
  dob = "";
  aadhar = "";
  pan = "";
  voter = "";

  flagName = false;
  flagDOB = false;
  flagAadhar = false;
  flagPan = false;
  flagVoter = false;

  handleNameInput = (element) => {
    // Getting the name
    this.name = element.target.value;

    // Breaking the name into subnames
    let nameArrWithSpaces = this.name.split(" ");

    // Handling extra spaces
    const nameArr = nameArrWithSpaces.filter((word) => word !== "");

    // Regex for matching
    let matchName = /^[A-Za-z ]+$/;

    if (nameArr.length >= 2) {
      // Loop for validating each word
      for (let word of nameArr) {
        word = word.trim();

        // Each words of a name should be at least contain 2 letters, and
        // word must match regex pattern
        if (word.length < 2 || !word.match(matchName)) {
          this.flagName = false;
          continue;
        }
        this.flagName = true;
      }
    }
  };

  setEndDate = () => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + day;
  };

  disableManualDateInput = (element) => {
    element.preventDefault();
    return false;
  };

  handleDobInput = (element) => {
    this.dob = element.target.value;
    console.log(this.dob);
    this.flagDOB = this.dob ? true : false;
  };

  handleAadharInput = (element) => {
    this.aadhar = element.target.value;

    let martchAadhar = /^[2-9]{1}[0-9]+$/;

    this.flagAadhar =
      this.aadhar.length === 12 && this.aadhar.match(martchAadhar)
        ? true
        : false;
  };

  handlePanInput = (element) => {
    this.pan = element.target.value;

    let martchPan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    this.flagPan =
      this.pan.length === 10 && this.pan.match(martchPan) ? true : false;
  };

  handleVoterInput = (element) => {
    this.voter = element.target.value;

    let martchVoter = /^[A-Z]{3}[0-9]{7}$/;

    this.flagVoter =
      this.voter.length === 10 && this.voter.match(martchVoter) ? true : false;
  };

  handleInputStates = (element) => {
    const { name, value } = element.target;

    let files = [];

    if (name === "uploadedFile") {
      files = document.getElementById("file").files;

      let data = [];
      for (var i = 0; i < this.files.length; i++) {
        data.push({
          fileId: i + 1,
          name: files[i].name,
          size: files[i].size,
        });
      }

      this.state.uploadedFile = data;
      console.log(this.state.uploadedFile.length);
    } else {
      this.setState({ ...this.state, [name]: value });
    }
  };

  handleSubmit = (element) => {
    element.preventDefault();
    console.log(this.state);

    if (
      this.flagName &&
      this.flagDOB &&
      this.flagAadhar &&
      this.flagPan &&
      this.flagVoter
    ) {
      JSAlert.alert("Correct Input", null, JSAlert.Icons.Success).dismissIn(
        1000
      );
    } else if (!this.flagName) {
      JSAlert.alert("Enter a valid Name", null, JSAlert.Icons.Failed).dismissIn(
        1000
      );
    } else if (!this.flagDOB) {
      JSAlert.alert(
        "Enter a valid Date of Birth",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.flagAadhar) {
      JSAlert.alert(
        "Enter a valid Aadhar ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.flagPan) {
      JSAlert.alert(
        "Enter a valid Pan ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.flagVoter) {
      JSAlert.alert(
        "Enter a valid Voter ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    }
  };

  render() {
    return (
      <div className={styles.testApiPage}>
        {/* Form Sections */}
        <form
          action=""
          encType="multipart/formdata"
          className={styles.formSection}
        >
          {/* User Details Section */}
          <section
            className={`${styles.formSection__Card} ${styles.formSection__userDetails}`}
          >
            {/* User Details Header */}
            <div className={styles.userDetails__Header}>User Details</div>

            <div className={styles.userDetails__Form}>
              {/* Name */}
              <div id="nameDiv">
                <label className={styles.userDetails__Label}>
                  Name <span className={styles.userDetails__Mandatory}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Enter your Name"
                  className={styles.userDetails__InputArea}
                  value={this.state.name}
                  onChange={(e) => this.handleInputStates(e)}
                  onBlur={(e) => this.handleNameInput(e)}
                />
              </div>

              {/* DOB */}
              <div id="dobDiv">
                <label className={styles.userDetails__Label}>
                  Date of Birth{" "}
                  <span className={styles.userDetails__Mandatory}>*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="dob"
                  id="date"
                  max={this.setEndDate()}
                  autoComplete="off"
                  className={styles.userDetails__InputArea}
                  value={this.state.dob}
                  onChange={(e) => this.handleInputStates(e)}
                  onBlur={(e) => this.handleDobInput(e)}
                  onKeyDown={(e) => this.disableManualDateInput(e)}
                />
              </div>

              {/* Aadhar Card UID */}
              <div id="uidAadharDiv">
                <label className={styles.userDetails__Label}>
                  Aadhar ID{" "}
                  <span className={styles.userDetails__Mandatory}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="uidAadhar"
                  id="uidAadharInp"
                  autoComplete="off"
                  placeholder="Enter your Aadhaar ID"
                  className={styles.userDetails__InputArea}
                  value={this.state.uidAadhar}
                  onChange={(e) => this.handleInputStates(e)}
                  onBlur={(e) => this.handleAadharInput(e)}
                />
              </div>

              {/* Pan Card UID */}
              <div id="uidPanDiv">
                <label className={styles.userDetails__Label}>
                  Pan ID{" "}
                  <span className={styles.userDetails__Mandatory}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="uidPan"
                  id="uidPanInp"
                  autoComplete="off"
                  placeholder="Enter your Pan ID"
                  className={styles.userDetails__InputArea}
                  value={this.state.uidPan}
                  onChange={(e) => this.handleInputStates(e)}
                  onBlur={(e) => this.handlePanInput(e)}
                />
              </div>

              {/* Voter Card UID */}
              <div id="uidVoterDiv">
                <label className={styles.userDetails__Label}>
                  Voter ID.{" "}
                  <span className={styles.userDetails__Mandatory}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="uidVoter"
                  id="uidVoterInp"
                  autoComplete="off"
                  placeholder="Enter your Voter ID"
                  className={styles.userDetails__InputArea}
                  value={this.state.uidVoter}
                  onChange={(e) => this.handleInputStates(e)}
                  onBlur={(e) => this.handleVoterInput(e)}
                />
              </div>

              {/* Address */}
              <div id="addressDiv">
                <label className={styles.userDetails__Label}>Address</label>
                <br />
                <textarea
                  name="address"
                  id="address"
                  placeholder="Enter your Address"
                  autoComplete="off"
                  maxLength="200"
                  className={styles.userDetails__AddressInputArea}
                  value={this.state.address}
                  onChange={(e) => this.handleInputStates(e)}
                />
              </div>
            </div>

            <img
              src="./Images/DirectionalArrow.png"
              alt="Proceed towards uploading documents"
              className={styles.fileUploadIndicator}
            ></img>
          </section>

          {/* File Upload Section */}
          <section
            className={`${styles.formSection__Card} ${styles.formSection__fileUpload}`}
          >
            {/* File Upload Header */}
            <div className={styles.fileUpload__Header}>File Upload</div>
            {/* File Uplaad Section */}
            <label htmlFor="file">
              {/* File Upload Button */}
              <img
                src="./Images/FileUploadBground.png"
                alt=""
                className={styles.fileUpload__UploadButton}
              />

              {/* File Input */}
              <input
                type="file"
                name="uploadedFile"
                id="file"
                multiple
                className={styles.uploadDefButton}
                onChange={(e) => this.handleInputStates(e)}
              />
            </label>
            {/* Uploaded File Details */}
            <div className={styles.uploadSection}>
              <FileCard name="Swapnodeep.pdf" size="4 MB" />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className={styles.submitButton}
              onClick={(e) => this.handleSubmit(e)}
            >
              Submit
            </button>
            <img
              src="./Images/DocValidateAPI-logo.png"
              alt="DocValidateLogo"
              className={styles.footerLogo}
            />
          </section>
        </form>
      </div>
    );
  }
}

export default TestAPISection;
