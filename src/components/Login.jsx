import React, {useState} from 'react';
import '../Styles/Login.css'

function Login(){
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const sendData = (event) => {
        event.preventDefault()
        const data = {
            login, password
        }
        console.log(data)
    }


    return (
        <div >
            <form className="cover" onSubmit={sendData}>
            <h1>ZALOGUJ SIĘ</h1>
            <input type="login" placeholder="Login:" value={login} onChange={(event)=>setLogin(event.target.value)}/>
            <input type="password" placeholder="Hasło:" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <div >
                    <button type="submit" className="login-btn">ZALOGUJ </button>
                </div>
            </form>
        </div>)
    }

export default Login;

