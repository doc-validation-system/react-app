import React from "react";
import styles from "./TestAPI.module.css";
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
      uploadedFiles: {},
      flagName: false,
      flagDOB: false,
      flagAadhar: false,
      flagPan: false,
      flagVoter: false,
      flagShowLoader: false,
      flagModalViewer: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInputStates = this.handleFileInputStates.bind(this);
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
    this.dob = new Date(element.target.value).toISOString();
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
    let validationFile = await element.target.files[0];
    let fileName = element.target.name;

    await this.setState({
      uploadedFiles: {
        ...this.state.uploadedFiles,
        [fileName]: {
          file: validationFile,
          name: validationFile.name,
          type: validationFile.type,
          size: validationFile.size,
        },
      },
    });

    console.log(this.state.uploadedFiles);
  }

  abbrName = (element) => {
    // Abbreviating long file names
    if (element.length > 16) {
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

  closeModal = () => {
    this.setState({ flagModalViewer: false });
  };

  // To store details for the modal
  formDetails = {};

  handleSubmit = async (element) => {
    element.preventDefault();
    console.log(this.state);

    if (
      this.state.flagName &&
      this.state.flagDOB &&
      this.state.flagAadhar &&
      this.state.flagPan &&
      this.state.flagVoter &&
      Object.keys(this.state.uploadedFiles).length >= 1
    ) {
      this.formDetails.name = this.state.name;
      this.formDetails.dob = this.state.dob;
      this.formDetails.aadharId = this.state.uidAadhar;
      this.formDetails.panId = this.state.uidPan;
      this.formDetails.voterId = this.state.uidVoter;

      let formdata = new FormData();

      // API Key
      let apiKey = "kKssKzoPqzcqFxrxwpDk1141718181OQMnn";

      // Appending Uploaded Files
      // Aadhar Card
      formdata.append(
        "image",
        this.state.uploadedFiles.aadharFile.file,
        `${apiKey}_aadhar.${
          this.state.uploadedFiles.aadharFile.file.type.split("/")[1]
        }`
      );

      // Pan Card
      formdata.append(
        "image",
        this.state.uploadedFiles.panFile.file,
        `${apiKey}_pan.${
          this.state.uploadedFiles.panFile.file.type.split("/")[1]
        }`
      );

      // Voter Card
      formdata.append(
        "image",
        this.state.uploadedFiles.voterFile.file,
        `${apiKey}_voter.${
          this.state.uploadedFiles.voterFile.file.type.split("/")[1]
        }`
      );

      formdata.append("name", this.state.name);
      formdata.append("dob", this.state.dob);
      formdata.append("apiKey", apiKey);
      formdata.append("aadharId", this.state.uidAadhar);
      formdata.append("panId", this.state.uidPan);
      formdata.append("voterId", this.state.uidVoter);

      for (let key of formdata.keys()) {
        console.log(key, formdata.getAll(key));
      }

      // Initializing the form
      this.setState({
        name: "",
        dob: "",
        uidAadhar: "",
        uidPan: "",
        uidVoter: "",
        address: "",
        uploadedFiles: {},
        flagName: false,
        flagDOB: false,
        flagAadhar: false,
        flagPan: false,
        flagVoter: false,
        flagModalViewer: false,
        flagShowLoader: true,
      });

      // let url = "https://api-docvalidation.onrender.com/user/getdata";

      let url = "http://localhost:6001/user/getdata";

      let requestOptions = {
        method: "POST",
        body: formdata,
      };

      // Fetching DocValidation API
      let response = await fetch(url, requestOptions);

      // Parsing received data
      let decodedData = JSON.parse(await response.text());
      this.formDetails.decodedData = decodedData;

      let aadharData = this.formDetails.decodedData.data.aadhar;
      let panData = this.formDetails.decodedData.data.pan;
      let voterData = this.formDetails.decodedData.data.voter;

      if (!aadharData) {
        this.formDetails.decodedData.data.aadhar = {
          id: false,
          name: false,
          dob: false,
        };
      }

      if (!panData) {
        this.formDetails.decodedData.data.pan = {
          id: false,
          name: false,
          dob: false,
        };
      }

      if (!voterData) {
        this.formDetails.decodedData.data.voter = {
          id: false,
          name: false,
          dob: false,
        };
      }

      console.log(this.formDetails);
      if (this.formDetails.decodedData) {
        this.setState({
          flagShowLoader: false,
          flagModalViewer: true,
        });
      }
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
    } else if (Object.keys(this.state.uploadedFiles).length < 1) {
      JSAlert.alert(
        "Upload at least one Identification Card",
        null,
        JSAlert.Icons.Failed
      ).dismissIn(1000);
    }
  };

  render() {
    return (
      <>
        {this.state.flagShowLoader && (
          <div className={styles.testApiModal__Loader}>
            <img
              src="./Images/DocValidateTitleLogo.png"
              alt=""
              className={styles.loader__Icon}
            />
            <div className={styles.loader__Text}>
              Please wait while we process your entries...
            </div>
          </div>
        )}
        {this.state.flagModalViewer && (
          <div className={styles.testApiModal}>
            <TestAPIModal
              closeModal={this.closeModal}
              formResult={this.formDetails}
            />
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
                    className={`${styles.userDetails__InputArea} ${
                      this.state.name && styles.inputArea_Active
                    }`}
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
                    className={`${styles.userDetails__InputArea} ${
                      this.state.dob && styles.inputArea_Active
                    }`}
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
                    className={`${styles.userDetails__InputArea} ${
                      this.state.uidAadhar && styles.inputArea_Active
                    }`}
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
                    className={`${styles.userDetails__InputArea} ${
                      this.state.uidPan && styles.inputArea_Active
                    }`}
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
                    className={`${styles.userDetails__InputArea} ${
                      this.state.uidVoter && styles.inputArea_Active
                    }`}
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
                    className={`${styles.userDetails__AddressInputArea} ${
                      this.state.address && styles.addressInputArea_Active
                    }`}
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
                      accept=".png, .jpg, .jpeg"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Aadhar Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.uploadedFiles.aadharFile ? (
                      <div>
                        {this.abbrName(
                          this.state.uploadedFiles.aadharFile.name
                        )}{" "}
                        {"  "}(
                        {this.convertSize(
                          this.state.uploadedFiles.aadharFile.size
                        )}
                        )
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
                      accept=".png, .jpg, .jpeg"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Pan Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.uploadedFiles.panFile ? (
                      <div>
                        {this.abbrName(this.state.uploadedFiles.panFile.name)}{" "}
                        {"  "}(
                        {this.convertSize(
                          this.state.uploadedFiles.panFile.size
                        )}
                        )
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
                      accept=".png, .jpg, .jpeg"
                      className={styles.uploadDefButton}
                      onChange={(e) => this.handleFileInputStates(e)}
                    />
                  </label>
                  {/* Voter Card Details */}
                  <div className={styles.fileInput__FileDetails}>
                    {this.state.uploadedFiles.voterFile ? (
                      <div>
                        {this.abbrName(this.state.uploadedFiles.voterFile.name)}{" "}
                        {"  "}(
                        {this.convertSize(
                          this.state.uploadedFiles.voterFile.size
                        )}
                        )
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
