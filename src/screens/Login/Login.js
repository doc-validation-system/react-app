import React from "react";
import styles from "./Login.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

class Login extends React.Component {
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
  password = "";
  flagEmail=false;
  flagPassword=false;
  handleEmail = (element) => {
    this.email = element.target.value;
    let matchEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.email.match(matchEmail)) {
      this.flagEmail = true;
      this.setState({ showAlert: false })
    } else {
      this.flagEmail = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Enter a Valid Email",
        alertType: "error",
      })
    }
  }
  handlePassword = (element) => {
    this.password = element.target.value;
    this.passwordRef = document.getElementById("password");
    let matchPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$/;
    if (this.password.match(matchPassword)) {
      this.flagPassword = true;
      // Need to write validation
      this.setState({ showAlert: false })
    } else {
      this.flagPassword = false;
      // Need to write validation
      this.setState({
        showAlert: true,
        alertMessage: "Enter a Valid Password",
        alertType: "error",
      })
    }
  }
  handleLogin = async() => {
    if (this.flagEmail && this.flagPassword) {
      this.setState({ showSpinner: true }) 
      var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var bodyData= new URLSearchParams();
      bodyData.append("emailId", this.email);
      bodyData.append("password", this.password);

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: bodyData,
      redirect: 'follow'
      };

      var response= await fetch("https://api-docvalidation.onrender.com/user/login", requestOptions);
      var decodedData = JSON.parse(await response.text());
      if (response.status === 200) {
      // this.setState({
      //   showAlert: true,
      //   alertMessage: `${decodedData.title} `,
      //   alertType: "success",
      // });
      localStorage.setItem("organizationName" , `${decodedData.organizationName}`);
      localStorage.setItem(  "token" , `${decodedData.token}`);
      var profileHeader=new Headers();
      profileHeader.append("Authorization",'Bearer '+`${decodedData.token}`);
      profileHeader.append("Content-Type", "application/x-www-form-urlencoded");
      var profileRequestOptions = {
        method: 'GET',
        headers: profileHeader,
        redirect: 'follow'
        }
        var profileResponse= await fetch(`https://api-docvalidation.onrender.com/user/profile/${this.email}`, profileRequestOptions);
        this.setState({showSpinner:false});
        var profileData = JSON.parse(await profileResponse.text());
        if(profileResponse.status===200){
          window.open("/profile","_self")
        }else{
          this.setState({
            showAlert: true,
            alertMessage: `${profileData.title} `,
            alertType: "error",
          })
        }
    }else{
      this.setState({
        showAlert: true,
        alertMessage: `${decodedData.title} `,
        alertType: "error",
      })
    }
    }else{
      if(this.flagEmail===false){
        this.setState({
          showAlert: true,
          alertMessage: "Please enter your mail",
          alertType: "error",
        })
      }else if(this.flagPassword===false){
        this.setState({
          showAlert: true,
          alertMessage: "Please enter password",
          alertType: "error",
        })
      }
    }
    this.email = "";
    this.password = "";
  }
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
      ):(
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
            {this.state.showAlert ? (
                  <Alert severity={this.state.alertType}>
                    {this.state.alertMessage}
                  </Alert>
                ) : (
                  <div></div>
                )}

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
      )}
      </>   
    );
  }
}

export default Login;
