import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

const Movie=()=>{

    return(
            <div className="movie1">
                <NavLink to="/FilmDetails"style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <img width="300" height="auto" src="moviePosters/inception.jpg" className="poster" id='FilmDetails' text="Szczegóły"/>
                </NavLink>
            </div>
    )
}
export default Movie;
