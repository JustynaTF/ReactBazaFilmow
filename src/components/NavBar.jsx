import React, { Component } from "react";
import Searcher from "./Searcher";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import axios from "axios";
import {GiFilmStrip} from "react-icons/gi";

const NavBar = () => {
    const nav = useNavigate();
    const isNotLog = isExpired(localStorage.getItem("token"));
    const logOut = () => {
        const decodedToken = decodeToken(localStorage.getItem("token"));
        axios
            .delete(`https://at.usermd.net/api/user/logout/${decodedToken.userId}`, {
                data: { userId: decodedToken.userId },
            })
            .then((response) => nav("/"));
            localStorage.removeItem("token");
    };
    return (
        <div className="header">
                <div className="nav-options">
                        <Link to="/" style={{ textDecoration: "none", color: "orange" }}>
                         <h1 className="logoText">JUSTMOVIES</h1>
                        </Link>
                        <GiFilmStrip id='filmStrip'/>
                    <Searcher />
                {!isNotLog && (
                    <Link to="/add">
                        <button type="button" className="btn">
                            DODAJ FILM
                        </button>
                    </Link>
                )}
                <div className="logRegButton">
                    {isNotLog && (
                        <Link to="/signin">
                            <button type="button" className="btn">
                                ZALOGUJ SIĘ
                            </button>
                        </Link>
                    )}
                    {isNotLog && (
                        <Link to="/signup">
                            <button type="button" className="btn">
                                ZAREJESTRUJ SIĘ
                            </button>
                        </Link>
                    )}
                    {!isNotLog && (
                        <button onClick={logOut} type="button" className="btn">
                            WYLOGUJ SIĘ
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default NavBar;

