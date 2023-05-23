import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupNavigate from "./screens/Signup/Signup";
import LoginNavigate from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import PrivateRoute from "./screens/PrivateRoute/PrivateRoute";
import TestAPISection from "./screens/TestAPI/TestAPI";
import DocScreen from "./screens/Docscreen/Docscreen";
import About from "./screens/About/About";
import ServerUrl from "./screens/ServerURL/ServerUrl";

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
        <Route exact path="/docscreen" element={<DocScreen />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/testApi" element={<TestAPISection />} />
        <Route exact path="/serverUrl" element={<ServerUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
