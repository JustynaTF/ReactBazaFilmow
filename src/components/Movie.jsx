import React, { Component } from "react";

const Movie = (props) => {
    return (
        <>
            <div className="movie1">
                <img
                    width="300px"
                    height="auto"
                    src={props.img}
                    className="poster"
                ></img>
            </div>
        </>
    );
};
export default Movie;
