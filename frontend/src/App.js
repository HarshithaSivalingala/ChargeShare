import React from 'react';
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import StationScreen from "./screens/StationScreen";

const App = () => {
  return <Router>
    <Routes>
    <Route path="/login" element={<LoginScreen/>} />
    <Route path="/profile" element={<ProfileScreen/>} />
    <Route path="/" element={<HomeScreen/>} />
    <Route path="/chargestations" element={<StationScreen/>} />
    </Routes>
    
  </Router>
};
export default App;
