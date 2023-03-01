import React from "react";
import styles from "./FileCard.module.css";

class FileCard extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.size = props.size;
  }

  render() {
    return (
      <div className={styles.uploadSection__File}>
        {/* Uploaded File */}

        {/* File Icon */}
        <div className={styles.File__Icon}>
          <i className="fa fa-file-alt" aria-hidden="true"></i>
        </div>

        {/* File Contents */}
        <div className={styles.File__UploadedContentSection}>
          <div className={styles.File__ContentUploaded}>
            {/* File Details */}
            <div className={styles.File__Details}>{this.props.name}</div>
            <div className={styles.File__UploadProgress}>{this.props.size}</div>
          </div>
          {/* Uploaded checkmark */}
          <div className={styles.File__Icon}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default FileCard;
