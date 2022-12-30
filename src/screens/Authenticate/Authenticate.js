import React from "react";
import styles from "./Authenticate.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "../Signup/Signup";
import LoginSection from "../Login/Login";
import HomeScreen from "../Home/Home";

function Authentication() {
  return (
    <div className={styles.authPage}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/signup" element={<SignupSection />} />
          <Route exact path="/login" element={<LoginSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Authentication;
