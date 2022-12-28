import styles from "./Signup.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

class SignupSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
      showAlert: false,
      alertMessage: "",
      alertType: "",
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
      this.setState({ showAlert: false });
    } else {
      this.flagEmail = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Enter a Valid Email",
        alertType: "error",
      });
    }
  };
  handleOrganisationInput = (element) => {
    this.organisationName = element.target.value;
    if (this.organisationName.length < 2) {
      this.flagOrganization = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Enter a Valid Organization Name",
        alertType: "error",
      });
    } else {
      this.flagOrganization = true;
      this.setState({ showAlert: false });
    }
  };
  handlePasswordInput = (element) => {
    this.password = element.target.value;
    this.passwordRef = document.getElementById("password");
    let matchPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$/;
    if (this.password.match(matchPassword)) {
      this.flagPassword = true;
      // Need to write validation
      this.setState({ showAlert: false });
    } else {
      this.flagPassword = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Enter a Valid Password",
        alertType: "error",
      });
    }
  };
  handleConrfirmPassword = (element) => {
    this.conrfirmPassword = element.target.value;
    this.conrfirmPasswordRef = document.getElementById("conPass");
    if (this.conrfirmPassword.match(this.password)) {
      this.flagConfirmPassword = true;
      // Need to write validation
      this.setState({ showAlert: false });
    } else {
      this.flagConfirmPassword = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Password & Confirm Password did'nt Match",
        alertType: "error",
      });
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
      // alert(
      //   this.email +
      //   " " +
      //   this.organisationName +
      //   " " +
      //   this.password +
      //   " " +
      //   this.conrfirmPassword
      // );
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
        this.setState({
          showAlert: true,
          alertMessage: `${decodedData.title} ` + `${decodedData.message}`,
          alertType: "success",
        });
      } else {
        this.setState({
          showAlert: true,
          alertMessage: `${decodedData.title} ` + `${decodedData.message}`,
          alertType: "error",
        });
      }
    } else {
      if (this.flagEmail === false) {
        this.setState({
          showAlert: true,
          alertMessage: "Please enter your mail",
          alertType: "error",
        });
      } else if (this.flagOrganization === false) {
        this.setState({
          showAlert: true,
          alertMessage: "Please enter your organization name ",
          alertType: "error",
        });
      } else if (this.flagPassword === false) {
        this.setState({
          showAlert: true,
          alertMessage: "Please enter password",
          alertType: "error",
        });
      } else if (this.flagConfirmPassword === false) {
        this.setState({
          showAlert: true,
          alertMessage: "Password did not match,enter correct password",
          alertType: "error",
        });
      }
    }
  };
  render() {
    return (
      <>
        {this.state.showSpinner ? (
          <>
            <div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={this.state.showSpinner}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </>
        ) : (
          <section className={styles.signupSection}>
            <div className={styles.signupBox}>
              {/* Header */}
              <div className={styles.signupHeader}>Sign up</div>
              {this.state.showAlert ? (
                <Alert severity={this.state.alertType}>
                  {this.state.alertMessage}
                </Alert>
              ) : (
                <div></div>
              )}

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
                  <div className={styles.signupInputName}>Confirm Password</div>
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
                Already have an account? Log in
              </div>

              {/* Disclaimer */}
              <div className={styles.disclaimer}>
                By clicking Sign Up, you agree to our{" "}
                <span className={styles.highlight}>Terms</span> and have read{" "}
                <br /> and acknowledge our{" "}
                <span className={styles.highlight}>
                  Global Privacy Statement
                </span>
                .
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default SignupSection;
