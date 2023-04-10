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
                    <img src={this.devData.image} alt="image" className={styles.image__photo}/>
                </div>
                {/* Content */}
                <div className={styles.devDetail__Content}>
                    <div className={styles.content__Name}>{this.devData.name}</div>
                    <div className={styles.content__Text}>{this.devData.text}</div>
                </div>

                {/* Social handles */}
                <div className={styles.devDetail__Socials}>
                    <a href={this.devData.facebook}>
                        <img src={"./Images/Facebook.jpg"} className={styles.socials__Icon}/>
                    </a>
                    <a href={this.devData.linkedin}>
                        <img src="./Images/LinkedIn.jpg"  className={`${styles.icon__linkedIn} ${styles.socials__Icon}`}/>
                    </a>
                    <a href={this.devData.github}>
                        <img src="./Images/Github.jpg" className={styles.socials__Icon}/>
                    </a>
                </div>
                
                
            </div>
        );
    }
}

export default DevDetail;
