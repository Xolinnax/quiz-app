import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Difficulty from "./Difficulty.jsx";
import {useNavigate} from "react-router-dom";

function Home(props) {

    const navigate=useNavigate();
    const [diff,setDiff]=React.useState("");

    function startQuiz()
    {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple"+diff)
        .then(response => {
          return response.json();
        })
        .then(data => {
          props.setQuestions(data);
          navigate("/quiz");
        })

    }

    return (
  
      <div className="app">
  
          <Header />
  
          <h2 className="testText">Test your Knowledge</h2>
  
          <button onClick={startQuiz} className="startButton">Start</button>
  
          <Difficulty
            diff={diff}
            setDiff={setDiff}
           />

          <Footer />
      </div>
    );
  }
  
  export default Home;