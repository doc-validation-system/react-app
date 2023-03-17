import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupNavigate from "./screens/Signup/Signup";
import LoginNavigate from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import PrivateRoute from "./screens/PrivateRoute/PrivateRoute";
import TestAPISection from "./screens/TestAPI/TestAPI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/signup" element={<SignupNavigate />} />
        <Route exact path="/login" element={<LoginNavigate />} />
        {/* <Route exact path="/profile" element={<ProfileSection />} /> */}
        <Route
          exact
          path="/profile"
          element={<PrivateRoute routeName={{ path: "/profile" }} />}
        />
        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute routeName={{ path: "/dashboard" }} />}
        />
        <Route exact path="/testApi" element={<TestAPISection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
