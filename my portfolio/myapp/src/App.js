import React from "react";
import "./index.css"
import "./components/Main.css"

import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";




function App() {
  return (
    <>
    {/* <Navbar1/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />

        
      </Routes>
      
    
    </>
    );
}

export default App;
