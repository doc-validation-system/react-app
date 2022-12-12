import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Signup.module.css';


const SignupCard = ()=>{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Signup
        </Typography>
        <div className={styles.border} />
      </CardContent>
      <CardActions>
        <Button variant="outlined" className={styles.button}>Signup</Button>
      </CardActions>
    </Card>
  );
}

const SignupScreen = () => {
  return(
    <div className={styles.maindivStyle}>
      <header className={styles.divheader}>
        <SignupCard />
      </header>
    </div>
  );
}

export default SignupScreen