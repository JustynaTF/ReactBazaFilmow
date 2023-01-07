import React, {useState} from 'react';
import '../Styles/Login.css'

function Register(){
    const [login, setLogin] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const sendData = (event) => {
        event.preventDefault()
        const data = {
            login, username, email, password
        }
        console.log(data)
    }


    return (
        <div >
            <form className="cover" onSubmit={sendData}>
                <h1>ZAREJESTRUJ SIĘ</h1>
                <input type="login" placeholder="Login:" value={login} onChange={(event)=>setLogin(event.target.value)}/>
                <input type="username" placeholder="Nazwa:" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                <input type="email" placeholder="Email:" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                <input type="password" placeholder="Hasło:" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <div >
                    <button type="submit" className="login-btn">ZAREJESTRUJ </button>
                </div>

            </form>
        </div>)
}

export default Register;
