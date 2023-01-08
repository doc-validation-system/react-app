import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "./screens/Signup/Signup";
import LoginSection from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import ProfileSection from "./screens/Profile/Profile"
import DashboardSection from "./screens/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/signup" element={<SignupSection />} />
        <Route exact path="/login" element={<LoginSection />} />
        <Route exact path="/profile" element={<ProfileSection />} />
        <Route exact path="/dashboard" element={<DashboardSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
