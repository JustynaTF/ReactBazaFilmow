import React, { Component, useEffect, useState } from "react";
import Movie from "./Movie";
import MovieText from "./MovieTitles";
import MarkMovie from "./MovieRatings";
import MovieDetails from "./MovieDetails";
import axios from "axios";
import { decodeToken } from "react-jwt";

const OpenMovie = () => {
    const decoded = decodeToken(localStorage.getItem("token") ?? {});
    const isAdmin = decoded?.isAdmin ? decoded.isAdmin : false;
    const [data, setData] = useState([]);
    useEffect(() => {
        getFilm();
    }, []);
    const getFilm = () => {
        axios({
            method: "get",
            url: "https:at.usermd.net/api/movies",
        })
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => console.log(error));
        console.log(data);
    };

    const deleteFilm = (filmId) => {
        if (isAdmin) {
            axios({
                method: "delete",
                url: `https://at.usermd.net/api/movie/${filmId}`,
            })
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch((error) => console.log(error));
            console.log(data);
        }
    };
    return (
        <div className="filmsCointainer">
            {data?.map((data, index) => {
                return (
                    <div className="filmCointainer" key={index}>
                        <Movie img={data.image} />
                        <div className="movieData">
                            <MovieText title={data.title} content={data.content} />
                            <MovieDetails id={data.id} />
                            {isAdmin && (
                                <div>
                                    <button
                                        className="btn-2"
                                        onClick={() => deleteFilm(data.id)}>
                                        USUŃ FILM{" "}
                                    </button>
                                </div>
                            )}
                            <MarkMovie />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default OpenMovie;
