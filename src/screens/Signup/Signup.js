import React from "react";
import styles from "./Signup.module.css";
import FlatButton from "../../service/FlatButton/FlatButton";

const Signup = () => {
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
            />
          </div>

          {/* Submit button */}
          <FlatButton buttonData={{ buttonName: 'Signup' }} />
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
};

export default Signup;
