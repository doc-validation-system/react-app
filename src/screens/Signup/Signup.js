import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import styles from "./Signup.module.css";
import TextField from "@mui/material/TextField";
import Button from "../../button/button";

const SignupCard = () => {
  return (
    <Card sx={{ width: "400px" }} className={styles.parentCard}>
      <CardContent>
        <div className={styles.heading}> Sign up</div>

        <div className={styles.seperator} />

        <div className={styles.subCardDiv}>
          <CardActions>
            <TextField
              className={styles.box}
              label="Username"
              variant="outlined"
            />
          </CardActions>
          <CardActions>
            <TextField
              className={styles.box}
              label="Email"
              variant="outlined"
            />
          </CardActions>
          <CardActions>
            <TextField
              className={styles.box}
              label="Organization Name"
              variant="outlined"
            />
          </CardActions>
          <CardActions>
            <TextField
              className={styles.box}
              name="Password"
              type="password"
              placeholder="Password"
              label="Password"
            />
          </CardActions>
          <CardActions>
            <TextField
              className={styles.box}
              name="Confirm Password"
              type="password"
              placeholder="Password"
              label=" Confirm Password"
            />
          </CardActions>
        </div>

        <Button />

        <div className={styles.disclaimer}>
          By clicking Sign Up, you agree to our{" "}
          <span className={styles.highlight}>Terms</span> and have read <br />{" "}
          and acknowledge our{" "}
          <span className={styles.highlight}>Global Privacy Statement</span>.
        </div>

        <div className={styles.signUpFooter}>
          <div>
            Invisible reCAPTCHA by Google{" "}
            <span className={styles.highlight}>Privacy Policy</span> and{" "}
            <span className={styles.highlight}>Terms of Use</span>.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SignupScreen = () => {
  return (
    <div className={styles.maindivStyle}>
      <header className={styles.divheader}>
        <SignupCard />
      </header>
    </div>
  );
};

export default SignupScreen;
