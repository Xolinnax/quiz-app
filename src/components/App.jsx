import Home from "./Home.jsx";
import Quiz from "./Quiz.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const [diffState,setDiffState]=React.useState("Any");
    
    const [questions,setQuestions]=React.useState([]);

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home 
                setQuestions={setQuestions}
                diffState={diffState}
                setDiffState={setDiffState}
            />} />
            <Route path="/quiz" element={<Quiz
                questions={questions}
            />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
