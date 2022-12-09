import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieTitles from "./MovieTitles";
import MovieRatings from "./MovieRatings";
import Movie from "./Movie";
import data from "../MoviesData";

const Movies =()=>{
    const data2=data

    return (
        <div className="filmsCointainer">
            {
                data.map((data, index)=>{
                    return(
                        <div className="filmCointainer">
                            <Movie/>
                            <div className="movieData">
                                <MovieTitles/>
                                <MovieRatings/>
                            </div>
                        </div>

                    )
                } )
            }
        </div>
    );
}
export default Movies;
