import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const sendData = (event) => {
        event.preventDefault();
        const data = {
            login,
            password,
        };
        axios({
            method: "post",
            url: "https://at.usermd.net/api/user/auth",
            data: data,
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                console.log(response);
                nav("/");
                window.location.reload();
            })
            .catch((error) => console.log(error));
        console.log(data);
    };
    return (
        <div className="cover">
            <form onSubmit={sendData}>
                <h3>Zaloguj się</h3>
                <div className="mb-3">
                    <label>Login</label>
                    <input
                        type="login"
                        className="form-control"
                        placeholder="Login:"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Hasło:"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                    <button type="submit" className="btn">
                        {" "}
                        Zaloguj się
                    </button>
            </form>
        </div>
    );
};
export default Login;
