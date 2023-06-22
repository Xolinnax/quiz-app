import React from "react";
import Header from "./Header.jsx";
import {useNavigate} from "react-router-dom";

function Error()
{
    const navigate=useNavigate();
    function goToHome()
    {
        navigate("/");
    }
    
    return (
        <div>
            <Header />   
            <div className="error">
                <h1 className="errormsg">Please do not refresh the page until the quiz is done!</h1>
                <button onClick={goToHome} className="startButton">Home</button>
            </div>     
        </div>
    )
}

export default Error;