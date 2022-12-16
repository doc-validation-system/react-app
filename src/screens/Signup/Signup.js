import React from "react";
import styles from "./Signup.module.css";
import Button from "../../button/button";

const Signup = () => {
  return (
    <section className={styles.signupSection}>
      
      <div className={styles.signupBox}>
        {/* Header */}
        <div className={styles.signupHeader}>Sign up</div>

        {/* Input form */}
        <form action="" className={styles.signupForm}>
          {/* Username */}
          <div id="usernameDiv">
            <div className={styles.signupInputName}>Username</div>
            <input type="text"
              name="username"
              id="username"
              autoComplete="off"
              className={styles.signupInputField}
            />
            <div className={styles.signupInputErrorMsg}></div>
          </div>

          {/* Email */}
          <div id="emailDiv">
            <div className={styles.signupInputName}>Email</div>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
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
              className={styles.signupInputField}
            />
          </div>

          {/* Submit button */}
          <Button />
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
