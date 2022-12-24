import styles from "./Signup.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";
import React from "react";

class SignupSection extends React.Component {
  email = "";
  organisationName = "";
  password = "";
  conrfirmPassword = "";
  //emailRef=useRef(null);
  flagEmail = false;
  flagPassword = false;
  flagOrganization = false;
  flagConfirmPassword = false;
  handleEmailInput = (element) => {
    this.email = element.target.value;
    //this.emailRef = document.getElementById("email");
    //this.emailRef.classList.add("error_alert");
    // let matchEmail =
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (this.email.match(matchEmail)) {
    //   this.flagEmail = true;
    //   //this.emailRef.current.classList.remove("error_alert");
    // } else {
    //   this.flagEmail = false;
    //   console.log("error");
    //   //this.emailRef.current.classList.add("error_alert");
    // }
  };
  handleOrganisationInput = (element) => {
    this.organisationName = element.target.value;
  };
  handlePasswordInput = (element) => {
    this.password = element.target.value;
  };
  handleConrfirmPassword = (element) => {
    this.conrfirmPassword = element.target.value;
  };
  handleSignup = () => {
    alert(
      this.email +
        " " +
        this.organisationName +
        " " +
        this.password +
        " " +
        this.conrfirmPassword
    );
  };
  render() {
    return (
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
                onBlur={this.handleEmailInput}
              />
              <div className={styles.signupInputErrorMsg}></div>
            </div>

            {/* Organization Name */}
            <div id="orgDiv">
              <div className={styles.signupInputName}>Organization Name</div>
              <input
                type="text"
                name="orgName"
                id="orgName"
                autoComplete="off"
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
            <span className={styles.highlight}>Terms</span> and have read <br />{" "}
            and acknowledge our{" "}
            <span className={styles.highlight}>Global Privacy Statement</span>.
          </div>
        </div>
      </section>
    );
  }
}

export default SignupSection;
