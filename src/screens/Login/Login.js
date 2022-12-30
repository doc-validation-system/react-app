import React from "react";
import styles from "./Login.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";

class Login extends React.Component {
  email = "";
  password = "";
  handleEmail = (element) => {
    this.email = element.target.value;
  };
  handlePassword = (element) => {
    this.password = element.target.value;
  };
  handleLogin = () => {
    alert(this.email + " " + this.password);
  };
  render() {
    return (
      <div>
        {/* Header with Logo */}
        <header className={`${styles.flex} ${styles.header}`}>
          <img
            src="./Images/DocValidateAPI-logo.png"
            alt="DocValidateLogo"
            className={styles.logoImage}
          />
        </header>
        <section className={styles.loginSection}>
          <div className={styles.loginBox}>
            {/* Header */}
            <div className={styles.loginHeader}>Log In</div>

            {/* Input form */}
            <form action="" className={styles.loginForm}>
              {/* Email */}
              <div id="emailDiv">
                <div className={styles.loginInputName}>Email</div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter your Email"
                  className={styles.loginInputField}
                  onChange={this.handleEmail}
                />
                <div className={styles.loginInputErrorMsg}></div>
              </div>

              {/* Password */}
              <div id="passDiv">
                <div
                  className={styles.loginInputName}
                  placeholder="Enter your password"
                >
                  Password
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className={styles.loginInputField}
                  onChange={this.handlePassword}
                />
                <div className={styles.loginInputErrorMsg}></div>
              </div>

              {/* Submit button */}
              <FlatButton
                buttonData={{
                  buttonName: "Login",
                  handleButton: this.handleLogin,
                }}
              />
            </form>

            <div className={styles.signupRedirect}>
              Don't Have Account ?{" "}
              <span
                className={styles.signupRedirectLink}
                onClick={() => window.open("/signup", "_self")}
              >
                Sign up
              </span>
            </div>

            {/* Disclaimer */}
            <div className={styles.disclaimer}>
              By clicking Sign Up, you agree to our{" "}
              <span className={styles.highlight}>Terms</span> and have read{" "}
              <br /> and acknowledge our{" "}
              <span className={styles.highlight}>Global Privacy Statement</span>
              .
            </div>
          </div>
        </section>
        {/* Footer with Project team info*/}
        <footer className={`${styles.flex} ${styles.footer}`}>
          <p className={styles.footer__text}>
            © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
            Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
            Swapnodeep Biswas
          </p>
        </footer>
      </div>
    );
  }
}

export default Login;
