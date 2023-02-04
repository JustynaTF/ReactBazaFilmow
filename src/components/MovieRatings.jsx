import React, { Component } from "react";
import {IoIosStarOutline} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieRatings = () => {
    return (
        <>
            <div className="box">
                <div className="rating">
                    <IoIosStarOutline fontSize={35} color="#EE9B00" className='movieRatingsStar'/>
                    <p>Ocena: 8.3</p>
                </div>
            </div>
        </>
    );
};
export default MovieRatings;
