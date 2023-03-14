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
      flagName: false,
      flagDOB: false,
      flagAadhar: false,
      flagPan: false,
      flagVoter: false,
      flagFileUpload: false,
    };
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

    let martchPan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (this.pan.length === 10 && this.pan.match(martchPan)) {
      this.setState({ flagPan: true });
    } else {
      this.setState({ flagPan: true });
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

  fileIdAssigner = 1;

  async handleFileInputStates() {
    // When entering files anew
    // await this.setState({ uploadedFile: [] });

    let noOfFiles = await this.state.uploadedFile.length;

    let files = [];

    if (noOfFiles < 3) {
      files = document.getElementById("file").files;

      if (files.length > 3) {
        this.setState({ flagFileUpload: false });

        JSAlert.alert(
          "Only 3 files are accepted",
          null,
          JSAlert.Icons.Failed
        ).dismissIn(1000);
      } else {
        this.setState({ flagFileUpload: true });

        for (var i = 0; i < files.length; i++) {
          await this.setState({
            uploadedFile: [
              ...this.state.uploadedFile,
              {
                fileId: this.fileIdAssigner++,
                name: files[i].name,
                size: files[i].size,
              },
            ],
          });
        }
      }
    } else {
      JSAlert.alert(
        "Delete files before uploading. Only 3 files are accepted",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);

      return;
    }

    console.log(this.state.uploadedFile);

    return false;
  }

  handleFileUploadInput = () => {
    if (this.state.uploadedFile.length < 1) {
      this.setState({ flagFileUpload: false });
    } else {
      this.setState({ flagFileUpload: true });
    }
  };

  rerenderUI = () => {
    this.forceUpdate();
  };

  abbrName = (element) => {
    if (element.length > 25) {
      return (
        element.slice(0, 14) +
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

  async deleteCard(elementId) {
    await this.setState({
      uploadedFile: this.state.uploadedFile.filter((file) => {
        return file.fileId !== elementId;
      }),
    });

    this.handleFileUploadInput();

    console.log(this.state.uploadedFile.length);
    console.log(this.state.uploadedFile);
  }

  handleSubmit = (element) => {
    element.preventDefault();
    console.log(this.state);

    if (
      this.state.flagName &&
      this.state.flagDOB &&
      this.state.flagAadhar &&
      this.state.flagPan &&
      this.state.flagVoter &&
      this.state.flagFileUpload
    ) {
      JSAlert.alert("Correct Input", null, JSAlert.Icons.Success).dismissIn(
        1000
      );
      this.setState({
        name: "",
        dob: "",
        uidAadhar: "",
        uidPan: "",
        uidVoter: "",
        address: "",
        uploadedFile: [],
        flagName: false,
        flagDOB: false,
        flagAadhar: false,
        flagPan: false,
        flagVoter: false,
        flagFileUpload: false,
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
    } else if (!this.state.flagFileUpload) {
      JSAlert.alert(
        "Select files to upload",
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
                accept=".png, .jpg, .jpeg, .pdf"
                className={styles.uploadDefButton}
                onClick={(element) => {
                  element.target.value = "";
                }}
                onChange={() => {
                  this.handleFileInputStates();
                  this.rerenderUI();
                }}
              />
            </label>
            {/* Uploaded File Details */}
            <div className={styles.uploadSection}>
              {this.state.uploadedFile.length > 0 &&
                this.state.uploadedFile.map((element) => {
                  return (
                    <div key={element.fileId}>
                      <FileCard
                        name={this.abbrName(element.name)}
                        size={this.convertSize(element.size)}
                        deleteCard={() => {
                          this.deleteCard(element.fileId);
                        }}
                      />
                    </div>
                  );
                })}
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
