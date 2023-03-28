import React from "react";
import styles from "./TestAPI.module.css";
// import FileCard from "../../service/FileCard/FileCard";
// import FileInput from "../../service/FileInput/FileInput";
import TestAPIModal from "../TestAPI_Modal/TestAPIModal";
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
      aadharFile: "",
      panFile: "",
      voterFile: "",
      flagName: false,
      flagDOB: false,
      flagAadhar: false,
      flagPan: false,
      flagVoter: false,
      flagAadharFile: false,
      flagPanFile: false,
      flagVoterFile: false,
      flagModalViewer: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  name = "";
  dob = "";
  aadhar = "";
  pan = "";
  voter = "";

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
          this.setState({ flagName: false });
          continue;
        } else {
          this.setState({ flagName: true });
        }
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
    if (this.dob) {
      this.setState({ flagDOB: true });
    } else {
      this.setState({ flagDOB: false });
    }
  };

  handleAadharInput = (element) => {
    this.aadhar = element.target.value;

    let matchAadhar = /^[2-9]{1}[0-9]+$/;

    if (this.aadhar.length === 12 && this.aadhar.match(matchAadhar)) {
      this.setState({ flagAadhar: true });
    } else {
      this.setState({ flagAadhar: false });
    }
  };

  handlePanInput = (element) => {
    this.pan = element.target.value;

    let matchPan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (this.pan.length === 10 && this.pan.match(matchPan)) {
      this.setState({ flagPan: true });
    } else {
      this.setState({ flagPan: false });
    }
  };

  handleVoterInput = (element) => {
    this.voter = element.target.value;

    let matchVoter = /^[A-Z]{3}[0-9]{7}$/;

    if (this.voter.length === 10 && this.voter.match(matchVoter)) {
      this.setState({ flagVoter: true });
    } else {
      this.setState({ flagVoter: false });
    }
  };

  handleInputStates = (element) => {
    const { name, value } = element.target;

    this.setState({ ...this.state, [name]: value });
  };

  async handleFileInputStates(element) {
    let file = await element.target.files[0];
    let fileName = element.target.name;

    await this.setState({
      ...this.state,
      [fileName]: {
        name: file.name,
        size: file.size,
      },
    });

    // Aadhar Card Checker
    if (this.state.aadharFile === "") {
      await this.setState({ flagAadharFile: false });
    } else {
      await this.setState({ flagAadharFile: true });
    }

    // Pan Card Checker
    if (this.state.panFile === "") {
      await this.setState({ flagPanFile: false });
    } else {
      await this.setState({ flagPanFile: true });
    }

    // Voter Card Checker
    if (this.state.voterFile === "") {
      await this.setState({ flagVoterFile: false });
    } else {
      await this.setState({ flagVoterFile: true });
    }

    console.log(this.state.aadharFile, this.state.flagAadharFile);
  }

  abbrName = (element) => {
    // Abbreviating long file names
    if (element.length > 25) {
      return (
        element.slice(0, 17) +
        "..." +
        element.slice(element.length - 4, element.length)
      );
    }

    return element;
  };

  convertSize = (element) => {
    // Converting to KB
    element /= 1024;
    let sizeUnit = " KB";

    // Converting to MB
    if (element >= 1024) {
      element /= 1024;
      sizeUnit = " MB";
    }

    return element.toFixed(2) + sizeUnit;
  };

  closeModal = () => {
    this.setState({ flagModalViewer: false });
  };

  handleSubmit = (element) => {
    element.preventDefault();
    console.log(this.state);

    if (
      this.state.flagName &&
      this.state.flagDOB &&
      this.state.flagAadhar &&
      this.state.flagPan &&
      this.state.flagVoter &&
      this.state.flagAadharFile &&
      this.state.flagPanFile &&
      this.state.flagVoterFile
    ) {
      this.setState({
        name: "",
        dob: "",
        uidAadhar: "",
        uidPan: "",
        uidVoter: "",
        address: "",
        aadharFile: "",
        panFile: "",
        voterFile: "",
        flagName: false,
        flagDOB: false,
        flagAadhar: false,
        flagPan: false,
        flagVoter: false,
        flagAadharFile: false,
        flagPanFile: false,
        flagVoterFile: false,
        flagModalViewer: true,
      });
    } else if (!this.state.flagName) {
      JSAlert.alert("Enter a valid Name", null, JSAlert.Icons.Failed).dismissIn(
        1000
      );
    } else if (!this.state.flagDOB) {
      JSAlert.alert(
        "Enter a valid Date of Birth",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagAadhar) {
      JSAlert.alert(
        "Enter a valid Aadhar ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagPan) {
      JSAlert.alert(
        "Enter a valid Pan ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagVoter) {
      JSAlert.alert(
        "Enter a valid Voter ID",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagAadharFile) {
      JSAlert.alert(
        "Upload your Aadhar Card",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagPanFile) {
      JSAlert.alert(
        "Upload your Pan Card",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    } else if (!this.state.flagVoterFile) {
      JSAlert.alert(
        "Upload your Voter Card",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    }
  };

  render() {
    return (
      <>
        {this.state.flagModalViewer && (
          <div className={styles.testApiModal}>
            <TestAPIModal closeModal={this.closeModal} />
          </div>
        )}
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
                    Name{" "}
                    <span className={styles.userDetails__Mandatory}>*</span>
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

              {/* File Upload Icon */}
              <img
                src="./Images/FileUploadSectionIcon.png"
                alt=""
                className={styles.fileUpload__Icon}
              />

              {/* File Upload Area */}

              <div className={styles.fileUpload__FileInputArea}>
                {/* Aadhar Card Input */}
                <div className={styles.fileInput}>
                  <label htmlFor="aadharFile">
                    {/* Aadhar Card Upload Button */}
                    <div className={styles.fileInput__BrowseButton}>Browse</div>

                    <input
                      type="file"
                      name="aadharFile"
                      id="aadharFile"
                      accept=".png, .jpg, .jpeg, .pdf"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Aadhar Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.flagAadharFile ? (
                      <div>
                        {this.abbrName(this.state.aadharFile.name)} {"  "}(
                        {this.convertSize(this.state.aadharFile.size)})
                      </div>
                    ) : (
                      "Upload your Aadhar Card"
                    )}
                  </div>
                </div>

                {/* Pan Card Input */}
                <div className={styles.fileInput}>
                  <label htmlFor="panFile">
                    {/* Pan Card Upload Button */}
                    <div className={styles.fileInput__BrowseButton}>Browse</div>

                    <input
                      type="file"
                      name="panFile"
                      id="panFile"
                      accept=".png, .jpg, .jpeg, .pdf"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Pan Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.flagPanFile ? (
                      <div>
                        {this.abbrName(this.state.panFile.name)} {"  "}(
                        {this.convertSize(this.state.panFile.size)})
                      </div>
                    ) : (
                      "Upload your Pan Card"
                    )}
                  </div>
                </div>

                {/* Voter Card Input */}
                <div className={styles.fileInput}>
                  <label htmlFor="voterFile">
                    {/* Voter Card Upload Button */}
                    <div className={styles.fileInput__BrowseButton}>Browse</div>

                    <input
                      type="file"
                      name="voterFile"
                      id="voterFile"
                      accept=".png, .jpg, .jpeg, .pdf"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Voter Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.flagVoterFile ? (
                      <div>
                        {this.abbrName(this.state.voterFile.name)} {"  "}(
                        {this.convertSize(this.state.voterFile.size)})
                      </div>
                    ) : (
                      "Upload your Voter Card"
                    )}
                  </div>
                </div>
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
      </>
    );
  }
}

export default TestAPISection;
