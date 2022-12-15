import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Signup.module.css";
import TextField from "@mui/material/TextField";
import Button from "../../button/button";

const SignupCard = () => {
  return (
    <Card sx={{ width: "40%" }} className={styles.parentCard}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20 }}
          color="#286ADE"
          gutterBottom
          className={styles.head}
        >
          Signup
        </Typography>
        <div className={styles.border} />
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
        {/* <CardActions style={{ justifyContent: 'center' }}>
          <Button className={styles.Buttons1} variant="contained">Signup</Button>
        </CardActions>  */}
        <Button />
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
