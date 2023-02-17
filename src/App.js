import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "./screens/Signup/Signup";
import LoginSection from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import PrivateRoute from "./screens/PrivateRoute/PrivateRoute";
import TestAPISection from "./screens/TestAPI/TestAPI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/signup" element={<SignupSection />} />
        <Route exact path="/login" element={<LoginSection />} />
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
