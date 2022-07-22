import React from "react";
import { useHistory } from "react-router-dom";

function Merchant(){
    let user = localStorage.getItem("user")
    
    let history = useHistory();
    const homePage = () =>{
        history.push('/home');
    };
    return(
        <>       
        <div className="HomePage">
        <div className="topbar">
            <h1>Merchant Page</h1>
            <button onClick={homePage}>back</button>
        </div>
        <h3 id="pageBottom">Hi <span className="username">{user}</span>, Welcome to Merchant page.</h3>
        
        </div>
        </>
    )
}

export default Merchant;