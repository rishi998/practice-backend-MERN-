import Login from "./components/login";
// import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Usersignup from "./components/usersignup";
import Adminsignup from "./components/adminsignup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usersignup" element={<Usersignup />} />
        <Route path="/adminsignup" element={<Adminsignup />} />
      </Routes>
    </>
  );
}

export default App;
