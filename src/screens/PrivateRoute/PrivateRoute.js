import React from "react";
import { Navigate } from "react-router-dom";
import DashboardSection from "../Dashboard/Dashboard";
import LoginSection from "../Login/Login";

class PrivateRoute extends React.Component {
  ComponentName = {};
  constructor(props) {
    super(props);
    this.ComponentName = props.ComponentName;
    // this.ComponentName = props.ComponentName.toString();
    // this.getToken = this.getToken.bind(this);
    // alert(this.ComponentName);
    this.state = {
      loggedIn: this.getToken(),
    };
  }

  getToken = () => {
    let token = localStorage.getItem("token");
    if (token) return true;
    else return false;
  };

  render() {
    // let name = this.ComponentName.tag;
    // let MyComponent = window[name];
    // // alert(MyComponent);
    // if (this.getToken()) {
    //   return <Navigate to="/dashboard" />;
    //   // alert(this.ComponentName.tag);
    // } else {
    //   return <Navigate to="/login" />;
    // }

    if (this.state.loggedIn) {
      return <DashboardSection />;
      // alert(this.ComponentName.tag);
    } else {
      return <LoginSection />;
    }
  }
}

export default PrivateRoute;
