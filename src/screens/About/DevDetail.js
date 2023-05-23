import React from "react";
import styles from "./DevDetail.module.css";

class DevDetail extends React.Component {
    devData = {};
    constructor(props) {
        super(props);
        this.devData = props.devData;
    }
    render() {
        return (
            <div className={styles.devDetail}>
                {/* Image */}
                <div className={styles.devDetail__Image}>
                    <img src={this.devData.image} alt="devImage"  className={styles.image__photo}/>
                </div>
                {/* Content */}
                <div className={styles.devDetail__Content}>
                    <div className={styles.content__Name}>{this.devData.name}</div>
                    <div className={styles.content__Text}>{this.devData.text}</div>
                </div>

                {/* Social handles */}
                <div className={styles.devDetail__Socials}>
                    <a href={this.devData.facebook} rel="noreferrer" target="_blank">
                        <img src={"./Images/Facebook.jpg"} alt="facebook" className={styles.socials__Icon}/>
                    </a>
                    <a href={this.devData.linkedin} rel="noreferrer" target="_blank">
                        <img src="./Images/LinkedIn.jpg" alt="linkedin" className={`${styles.icon__linkedIn} ${styles.socials__Icon}`}/>
                    </a>
                    <a href={this.devData.github} rel="noreferrer" target="_blank">
                        <img src="./Images/Github.jpg" alt="github" className={styles.socials__Icon}/>
                    </a>
                </div>
                
                
            </div>
        );
    }
}

export default DevDetail;
