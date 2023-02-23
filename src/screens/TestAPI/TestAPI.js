import React from "react";
import styles from "./TestAPI.module.css";
import FileCard from "../../service/FileCard/FileCard";

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

  handleInputs = (element) => {
    const { name, value } = element.target;
    let files = [];

    if (name === "uploadedFile") {
      files = document.getElementById("file").files;

      let data = [];
      for (var i = 0; i < files.length; i++) {
        data.push({
          name: files[i].name,
          size: files[i].size,
        });
      }

      this.state.uploadedFile = data;
      console.log(this.state.uploadedFile.length);
    } else {
      this.setState({ ...this.state, [name]: value });
    }

    //console.log(this.state);
  };

  handleSubmit = (element) => {
    element.preventDefault();
    console.log(this.state);
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
                  onChange={(e) => this.handleInputs(e)}
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
                  autoComplete="off"
                  className={styles.userDetails__InputArea}
                  value={this.state.dob}
                  onChange={(e) => this.handleInputs(e)}
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
                  placeholder="Enter your Aadhar ID"
                  className={styles.userDetails__InputArea}
                  value={this.state.uidAadhar}
                  onChange={(e) => this.handleInputs(e)}
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
                  onChange={(e) => this.handleInputs(e)}
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
                  onChange={(e) => this.handleInputs(e)}
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
                  onChange={(e) => this.handleInputs(e)}
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
                onChange={(e) => this.handleInputs(e)}
              />
            </label>
            {/* Uploaded File Details */}
            <div className={styles.uploadSection}>
              {this.state.uploadedFile.map((element) => {
                console.log(element.name + " " + element.size);
                return (
                  <div key={element.name}>
                    <FileCard
                      fileCardData={{
                        name: element.name,
                        size: element.size,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            ;{/* Submit button */}
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
