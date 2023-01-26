import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "./screens/Signup/Signup";
import LoginSection from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import ProfileSection from "./screens/Profile/Profile";
// import DashboardSection from "./screens/Dashboard/Dashboard";
import PrivateRoute from "./screens/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/signup" element={<SignupSection />} />
        <Route exact path="/login" element={<LoginSection />} />
        <Route exact path="/profile" element={<PrivateRoute ComponentName={{tag: "/profile"}}/>} />
        <Route exact path="/dashboard" element={<PrivateRoute ComponentName={{tag: "/dashboard"}} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
