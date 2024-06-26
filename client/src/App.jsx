import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "remixicon/fonts/remixicon.css";
import ContectUs from "./components/ContectUs";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Gamification from "./components/Gamification";
import FlexGame from "./components/FlexGame";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContectUs />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/flexgame" element={<FlexGame />} />
        <Route path="/games" element={<Gamification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
