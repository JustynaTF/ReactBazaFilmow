import React, { Component } from "react";

const MovieTitles = (props) => {
    return (
        <>
            <div>
                <div>
                    <h4 className="title">{props.title}</h4>
                    <p className="description">{props.content}</p>
                </div>
            </div>
        </>
    );
};
export default MovieTitles;
