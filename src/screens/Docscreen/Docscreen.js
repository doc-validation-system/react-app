import React from "react";
import styles from "./Docscreen.module.css";
import { useNavigate } from "react-router-dom";

class DocScreen extends React.Component {
    render() {
        return (
            // <div>

            //     {/* <div>
            //         <iframe src="https://github.com/doc-validation-system/api-doc-validation#readme" title="TestApi Documentation" />
            //     </div> */}
            // </div>
            <div className={styles.dashboardPage}>
                {/* Header with Logo */}

                <header className={styles.header}>
                    <img
                        src="./Images/DocValidateAPI-logo.png"
                        alt="DocValidateLogo"
                        className={styles.logoImage}
                        onClick={() => this.props.navigate("/")}
                    />
                </header>

                {/* Footer with Project team info*/}
                <footer className={styles.footer}>
                    <p className={styles.footer__text}>
                        © 2022 DocValidateAPI. All rights reserved. <br />A project by
                        Aditi Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis
                        Paul and Swapnodeep Biswas
                    </p>
                </footer>
            </div>
        );
    }
}

function DocScreenNavigate() {
    const navigate = useNavigate();
    return (
        <div>
            <DocScreen navigate={navigate} />
        </div>
    );
}

export default DocScreenNavigate;

