import React from "react";
import styles from "./TestAPI.module.css";

class TestAPISection extends React.Component {
  render() {
    return (
      <div className={styles.testApiPage}>
        {/* Form Sections */}
        <form
          action=""
          enctype="multipart/formdata"
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
                onChange={this.handleNameInput}
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
                name="date"
                id="date"
                autoComplete="off"
                className={styles.userDetails__InputArea}
                onChange={this.handleDobInput}
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
                onChange={this.handleUidInput}
              />
            </div>

            {/* Address */}
            <div id="addressDiv">
              <label className={styles.userDetails__Label}>Address</label>
              <br />
              <textarea
                name="uid"
                id="uid"
                placeholder="Enter your Address"
                autoComplete="off"
                className={styles.userDetails__AddressInputArea}
                onChange={this.handleAddressInput}
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
                onChange={this.handleUidInput}
              />
            </label>

            {/* Submit button */}
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default TestAPISection;
