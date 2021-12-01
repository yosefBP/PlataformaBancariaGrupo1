import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Home from '../pages/Home';

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default Rutas;
