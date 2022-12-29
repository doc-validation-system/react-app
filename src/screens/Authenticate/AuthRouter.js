import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "../Signup/Signup";
import LoginSection from "../Login/Login";
import HomeScreen from "../Home/Home";

class AuthRouter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showSignup: true,
  //     showLogin: false
  //   };
  // }

  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/signup" element={<SignupSection />} />
          <Route exact path="/login" element={<LoginSection />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AuthRouter;
