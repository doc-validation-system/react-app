import React from "react";
import styles from "./TestAPI.module.css";

class TestAPISection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      uid: "",
      address: "",
      uploadedFiles: "",
    };
  }

  name = "";
  value = "";
  handleInputs = (element) => {
    // let file = element.files[0]; // Uploading the latest selected file

    // if (file) {
    //   let fileName = file.name;
    //   this.uploadFile(fileName);
    // }
    this.name = element.target.name;
    this.value = element.target.value;
    console.log(this.name + " : " + this.value);

    this.setState({ ...this.state, [this.name]: this.value });
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

            {/* UID */}
            <div id="uidDiv">
              <label className={styles.userDetails__Label}>
                Unique Id{" "}
                <span className={styles.userDetails__Mandatory}>*</span>
              </label>
              <br />
              <input
                type="text"
                name="uid"
                id="uid"
                autoComplete="off"
                placeholder="Enter your Unique ID"
                className={styles.userDetails__InputArea}
                value={this.state.uid}
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
                name="file"
                id="file"
                multiple
                className={styles.uploadDefButton}
                onChange={(e) => this.handleInputs(e)}
              />
            </label>

            {/* Uploaded File Details */}
            <div className={styles.uploadSection}>
              {/* Uploading File */}
              <div className={styles.uploadSection__File}>
                {/* File Icon */}
                <div className={styles.File__Icon}>
                  <i className="fa fa-file-alt" aria-hidden="true"></i>
                </div>

                {/* File Contents */}
                <div className={styles.File__ContentSection}>
                  <div className={styles.File__Content}>
                    {/* File Details */}
                    <div className={styles.File__Details}>
                      Image1.png • Uploading
                    </div>
                    <div className={styles.File__UploadProgress}>50%</div>
                  </div>

                  {/* Uploading progress bar */}
                  <div className={styles.File__ProgressBar}>
                    <div className={styles.progress}></div>
                  </div>
                </div>
              </div>

              {/* Uploaded File */}
              <div className={styles.uploadSection__File}>
                {/* File Icon */}
                <div className={styles.File__Icon}>
                  <i className="fa fa-file-alt" aria-hidden="true"></i>
                </div>

                {/* File Contents */}
                <div
                  className={`${styles.File__UploadedContentSection} ${styles.File__ContentSection}`}
                >
                  <div className={styles.File__ContentUploaded}>
                    {/* File Details */}
                    <div className={styles.File__Details}>
                      Image1.png • Uploaded
                    </div>
                    <div className={styles.File__UploadProgress}>70 KB</div>
                  </div>
                  {/* Uploaded checkmark */}
                  <div className={styles.File__Icon}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className={styles.submitButton}>
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
