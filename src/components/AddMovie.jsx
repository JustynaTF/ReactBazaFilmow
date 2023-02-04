import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const nav = useNavigate();
    const sendData = (event) => {
        event.preventDefault();
        const data = {
            title,
            image,
            content,
        };
        axios({
            method: "post",
            url: "https://at.usermd.net/api/movies",
            data: data,
        })
            .then((response) => {nav("/")
                window.location.reload()
            })
            .catch((error) => console.log(error));
        console.log(data);
    };
    return (
        <div className="cover">
            <form onSubmit={sendData}>
                <h3> Dodaj film </h3>
                <div className="mb-3">
                    <label>Tytuł</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Wpisz nazwę filmu:"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Obraz</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Podaj adres URL: "
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Opis</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Podaj Opis: "
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn-2">
                        {" "}
                        Dodaj
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AddMovie;

