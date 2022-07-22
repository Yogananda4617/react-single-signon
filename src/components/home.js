import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./components.css"
function Home(){
    let user = localStorage.getItem("user")
    
    let history = useHistory();
    const logoutPage = () =>{
        history.push('/login');
    };
    return(
        <>
        <div className="HomePage">
        <div className="topbar">
            <h1>Home Page</h1>
            <button onClick={logoutPage} >Logout</button>
        </div>
        
        <h3>Hi <span className="username">{user}</span> choose a option to redirect the reguired page.</h3>
        <button id="homebtn1"><Link to="/customer" id="link-btn">Customer</Link></button>
        <button id="homebtn2"><Link to="/merchant" id="link-btn">Merchant</Link></button>
        </div>
        </>
    )
}

export default Home;