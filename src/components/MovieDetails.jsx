import React, { Component } from "react";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
    return (
        <div className="buttonDetails">
            <Link to={`/description/${props.id}`}>
                <button type="button" className="btn-2">
                    WIĘCEJ
                </button>
            </Link>
        </div>
    );
};
export default MovieDetails;
