import styles from "./Signup.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import JSAlert from "js-alert";
import Loader from "../../service/Loader/Loader";

class SignupSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  email = "";
  organisationName = "";
  password = "";
  conrfirmPassword = "";
  flagEmail = false;
  flagPassword = false;
  flagOrganization = false;
  flagConfirmPassword = false;

  handleEmailInput = (element) => {
    this.email = element.target.value;

    let matchEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.email.match(matchEmail)) {
      this.flagEmail = true;
    } else {
      this.flagEmail = false;
    }
  };

  handleOrganisationInput = (element) => {
    this.organisationName = element.target.value;

    if (this.organisationName.length < 2) {
      this.flagOrganization = false;
    } else {
      this.flagOrganization = true;
    }
  };

  handlePasswordInput = (element) => {
    this.password = element.target.value;
    this.passwordRef = document.getElementById("password");

    let matchPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$/;

    if (this.password.match(matchPassword)) {
      this.flagPassword = true;
    } else {
      this.flagPassword = false;
    }
  };

  handleConrfirmPassword = (element) => {
    this.conrfirmPassword = element.target.value;
    this.conrfirmPasswordRef = document.getElementById("conPass");

    if (this.conrfirmPassword.match(this.password)) {
      this.flagConfirmPassword = true;
    } else {
      this.flagConfirmPassword = false;
    }
  };

  handleSignup = async () => {
    if (
      this.flagEmail &&
      this.flagOrganization &&
      this.flagPassword &&
      this.flagConfirmPassword
    ) {
      this.setState({ showSpinner: true });
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var bodyData = new URLSearchParams();
      bodyData.append("emailId", this.email);
      bodyData.append("organizationName", this.organisationName);
      bodyData.append("password", this.password);
      console.log(bodyData, null, 3);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: bodyData,
        redirect: "follow",
      };

      var response = await fetch(
        "https://api-docvalidation.onrender.com/user/signup",
        requestOptions
      );

      this.setState({ showSpinner: false });
      var decodedData = JSON.parse(await response.text());

      if (response.status === 201) {
        JSAlert.alert(
          `${decodedData.title} ` + `${decodedData.message}`,
          null,
          JSAlert.Icons.Success
        ).dismissIn(2000);
        // window.open("/login", "_self");
      } else {
        JSAlert.alert(
          `${decodedData.title} ` + `${decodedData.message}`,
          null,
          JSAlert.Icons.Failed
        );
      }
    } else {
      if (this.flagEmail === false) {
        JSAlert.alert(
          "Please enter valid email",
          null,
          JSAlert.Icons.Failed
        ).dismissIn(1000);
      } else if (this.flagOrganization === false) {
        JSAlert.alert(
          "Please enter valid organization name",
          null,
          JSAlert.Icons.Failed
        ).dismissIn(1000);
      } else if (this.flagPassword === false) {
        JSAlert.alert(
          "Please enter valid password",
          null,
          JSAlert.Icons.Failed
        ).dismissIn(1000);
      } else if (this.flagConfirmPassword === false) {
        JSAlert.alert(
          "Please enter matching password",
          null,
          JSAlert.Icons.Failed
        ).dismissIn(1000);
      }
    }

    this.email = "";
    this.organisationName = "";
    this.password = "";
    this.conrfirmPassword = "";
    this.flagEmail = false;
    this.flagOrganization = false;
    this.flagPassword = false;
    this.flagConfirmPassword = false;
  };

  render() {
    return (
      <>
        {this.state.showSpinner ? (
          <>
            <div>
              {/* <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={this.state.showSpinner}
              >
                <CircularProgress color="inherit" />
              </Backdrop> */}
              <Loader />
            </div>
          </>
        ) : (
          <div>
            {/* Header with Logo */}
            <header className={`${styles.flex} ${styles.header}`}>
              <img
                src="./Images/DocValidateAPI-logo.png"
                alt="DocValidateLogo"
                className={styles.logoImage}
              />
            </header>
            <section className={styles.signupSection}>
              <div className={styles.signupBox}>
                {/* Header */}
                <div className={styles.signupHeader}>Sign up</div>

                {/* Input form */}
                <form action="" className={styles.signupForm}>
                  {/* Email */}
                  <div id="emailDiv">
                    <div className={styles.signupInputName}>Email</div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Enter your Email"
                      className={styles.signupInputField}
                      onChange={this.handleEmailInput}
                    />
                    <div className={styles.signupInputErrorMsg}></div>
                  </div>

                  {/* Organization Name */}
                  <div id="orgDiv">
                    <div className={styles.signupInputName}>
                      Organization Name
                    </div>
                    <input
                      type="text"
                      name="orgName"
                      id="orgName"
                      autoComplete="off"
                      minLength={3}
                      placeholder="Enter your organization name"
                      className={styles.signupInputField}
                      onChange={this.handleOrganisationInput}
                    />
                    <div className={styles.signupInputErrorMsg}></div>
                  </div>

                  {/* Password */}
                  <div id="passDiv">
                    <div className={styles.signupInputName}>Password</div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter new password"
                      className={styles.signupInputField}
                      onChange={this.handlePasswordInput}
                    />
                    <div className={styles.signupInputErrorMsg}></div>
                  </div>
                  {/* Confirm Password */}
                  <div id="conPassDiv">
                    <div className={styles.signupInputName}>
                      Confirm Password
                    </div>
                    <input
                      type="password"
                      name="conPass"
                      id="conPass"
                      placeholder="Confirm your password"
                      className={styles.signupInputField}
                      onChange={this.handleConrfirmPassword}
                    />
                  </div>

                  {/* Submit button */}
                  <FlatButton
                    buttonData={{
                      buttonName: "Signup",
                      handleButton: this.handleSignup,
                    }}
                  />
                </form>

                <div className={styles.loginRedirect}>
                  Already have an account?{" "}
                  <span
                    className={styles.loginRedirectLink}
                    onClick={() => window.open("/login", "_self")}
                  >
                    Log in
                  </span>
                </div>

                {/* Disclaimer */}
                <div className={styles.disclaimer}>
                  By clicking Sign Up, you agree to our{" "}
                  <span className={styles.highlight}>Terms</span> and have read{" "}
                  <br /> and acknowledge our{" "}
                  <span className={styles.highlight}>
                    Global Privacy Statement.
                  </span>
                </div>
              </div>
            </section>
            {/* Footer with Project team info*/}
            <footer className={`${styles.flex} ${styles.footer}`}>
              <p className={styles.footer__text}>
                © 2022 DocValidateAPI. All rights reserved. <br />A project by
                Aditi Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis
                Paul and Swapnodeep Biswas
              </p>
            </footer>
          </div>
        )}
      </>
    );
  }
}

export default SignupSection;
