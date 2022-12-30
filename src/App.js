import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupSection from "./screens/Signup/Signup";
import LoginSection from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";

function App() {
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

export default App;
