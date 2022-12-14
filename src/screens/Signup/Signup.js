import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Signup.module.css";
import TextField from "@mui/material/TextField";

const SignupCard = () => {
  return (
    <Card sx={{ width: '40%' }}>
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
          <TextField className={styles.box} label="Email" variant="outlined" />
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
            name="Password"
            type="password"
            placeholder="Password"
            label="Password"
          />
        </CardActions>
        <CardActions>
          <TextField
            name="Confirm Password"
            type="password"
            placeholder="Password"
            label=" Confirm Password"
          />
        </CardActions>
        </div>
        <CardActions>
      
        </CardActions>
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
