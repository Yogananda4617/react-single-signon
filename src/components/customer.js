import React from "react";
import { useHistory } from "react-router-dom";

function Customer(){
    let user = localStorage.getItem("user")
    
    let history = useHistory();
    const homePage = () =>{
        history.push('/home');
    };
    return(
        <>       
        <div className="HomePage">
        <div className="topbar">
            <h1>Customer Page</h1>
            <button onClick={homePage}>Back</button>
        </div>
        <h3 id="pageBottom">Hi <span className="username">{user}</span>, Welcome to Customer page.</h3>
        
        </div>
        </>

    )
}

export default Customer;