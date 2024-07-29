import Login from "./components/login";
// import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Signupas from "./components/signupas";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signupas" element={<Signupas />} /> */}
      </Routes>
    </>
  );
}

export default App;
