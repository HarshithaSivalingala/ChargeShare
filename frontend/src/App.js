import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import HelpScreen from "./screens/HelpScreen";
import AboutScreen from "./screens/AboutScreen";
import SignupScreen from "./screens/SignupScreen";
import Header from "./components/Header"; // Import Header to persist across pages

const App = () => {
  return (
    <Router>
      <Header /> {/* Include Header here so it appears on all pages */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/help" element={<HelpScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
