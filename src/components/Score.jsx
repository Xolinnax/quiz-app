import React from "react";
import Header from "./Header.jsx";
import {useNavigate} from "react-router-dom";

function Score (props)
{
    const navigate=useNavigate();
    function goToHome()
    {
        navigate("/");
    }

    return (<div>
        <Header />
        <div className="showScore">
            <h1 className="score">You've gotten {props.score}/10 points!</h1>
            <button onClick={goToHome} className="startButton scoreButton">Home</button>
        </div>
    </div>);
}

export default Score;