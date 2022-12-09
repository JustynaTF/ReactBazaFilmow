import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React, {Component} from 'react';
import './Styles/NavBarStyle.css'
import Navbar from "./components/NavBar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";


function App() {
    return (
      <div className="App">
            <Navbar>
                  <Routes>
                      <Route path="/" element={<Movies/>}/>
                  </Routes>
            </Navbar>
        <Footer/>
      </div>
    )};

export default App;
