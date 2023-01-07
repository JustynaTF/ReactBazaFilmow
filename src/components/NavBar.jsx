import React, {Fragment, useState} from 'react';
import {Routes, Route, NavLink, } from "react-router-dom"
import '../Styles/NavBarStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GoSearch} from "react-icons/go";
import {GiFilmStrip} from "react-icons/gi";
import Login from "./Login";
import Register from "./Register";
import Movies from "./Movies";
import LastAdded from "./LastAdded";
import Rank from "./Rank";
import FilmDetails from "./FilmDetails";

function Navbar(){
    const[toggle, setToggle] = useState(true)
    return(
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className="nav-options">
                    <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                        <h1 id={toggle ? '' : 'heading'}>JUSTMOVIES</h1>
                    </NavLink>
                    <GiFilmStrip id='filmStrip'/>
                    <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Filmy</span>
                    </NavLink>
                    <NavLink to="/Rank"style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Rankingi </span>
                    </NavLink>
                    <NavLink to="/LastAdded"style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                        <span id={toggle ? 'Movies' : 'MoviesLight'}>Dodaj_Film</span>
                    </NavLink>
                </div>
                    <div className="input-group">
                        <div >
                            <input type="text" placeholder="Wyszukaj..."/>
                            <GoSearch fontSize={21} color="white" id='search'/>
                        </div>
                        <NavLink to="/Login" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Zaloguj</span>
                        </NavLink>
                        <NavLink to="/Register" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Zarejestruj</span>
                        </NavLink>
                        <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='' element={<Movies/>}/>
                <Route path='/LastAdded' element={<LastAdded/>}/>
                <Route path='/Rank' element={<Rank/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/FilmDetails' element={<FilmDetails/>}/>
            </Routes>
        </Fragment>
)}

export default Navbar;
