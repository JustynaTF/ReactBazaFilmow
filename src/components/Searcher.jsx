import React, { Component } from "react";
import {GoSearch} from "react-icons/go";

const Searcher = () => {
    return (
        <div className="input-group">
            <input
                placeholder="Wyszukaj..."
                type="search"
                id="search"
                className="form-control"
            />
            <div className="search-icon">
                <button type="button" className="searchbtn">
                    <GoSearch fontSize={21} color="black" id='search'/>
                </button>
            </div>
        </div>
    );
};
export default Searcher;
