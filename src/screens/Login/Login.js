import React from "react";
import styles from "./Login.module.css";
import Button from "../../service/button/button";

const Login = () => {
  return (
    <section className={styles.signupSection}>
      <div className={styles.signupBox}>
        {/* Header */}
        <div className={styles.signupHeader}>Log In</div>

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
            />
            <div className={styles.signupInputErrorMsg}></div>
          </div>


          {/* Password */}
          <div id="passDiv">
            <div className={styles.signupInputName} placeholder="Enter your password">Password</div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className={styles.signupInputField}
            />
            <div className={styles.signupInputErrorMsg}></div>
          </div>
          

          {/* Submit button */}
          <Button />
        </form>

        <div className={styles.loginRedirect}>
          Are you new? Sign Up
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
};

export default Login;
