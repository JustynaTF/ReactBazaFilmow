import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./Styles/styles.css";
import Footer from "./components/Footer";
import OpenMovie from "./components/OpenMovie";
import Register from "./components/Register";
import Login from "./components/Login";
import AddMovie from "./components/AddMovie";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Movies from "./components/Movies";
import { isExpired, decodeToken } from "react-jwt";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<OpenMovie />} />
                    <Route exact path="/signin" element={<Login />} />
                    <Route exact path="/signup" element={<Register />} />
                    <Route path="/description/:id" element={<Movies />} />
                    <Route
                        exact
                        path="/add"
                        element={
                            isExpired(localStorage.getItem("token")) ? (
                                <Navigate replace to="/" />
                            ) : (
                                <AddMovie />
                            )
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
export default App;
