import React from "react";
import DashboardSection from "../Dashboard/Dashboard";
import ProfileSection from "../Profile/Profile";
import LoginSection from "../Login/Login";

class PrivateRoute extends React.Component {
  routeName = {};

  constructor(props) {
    super(props);
    this.routeName = props.routeName;
    this.state = {
      loggedIn: this.getToken(),
    };
  }

  getToken = () => {
    let token = localStorage.getItem("token");
    return token ? true : false;
  };

  render() {
    if (this.state.loggedIn) {
      if(this.routeName.path === "/dashboard")
        return <DashboardSection />;
      if(this.routeName.path === "/profile")
        return <ProfileSection />;
    }

    return <LoginSection />;
  }
}

export default PrivateRoute;
