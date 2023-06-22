import React from "react";
import Header from "./Header.jsx";
import Error from "./Error.jsx";
import Score from "./Score.jsx";

const CorrAnswerResponse=["Nice! Thats a point, click next to go to the next question.","Well done! Click next to go to the next question.","Thats right! Click next to go to the next question.","Good job! Click next to go to the next question"];
const WrongAnswerResponse=["Oops! Try again by clicking next.","Oh no! Try again by clicking next.","Nice try! Try again by clicking next.","Thats okay! Try again by clicking next."];

const answersArr=["","","",""];
var theQuestion="";
var corrAnswerkey=0;
var score=0;

function Quiz(props)
{
    function unEscape(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g , "<");	 
        htmlStr = htmlStr.replace(/&gt;/g , ">");     
        htmlStr = htmlStr.replace(/&quot;/g , "\"");  
        htmlStr = htmlStr.replace(/&#039;/g , "'");   
        htmlStr = htmlStr.replace(/&ldquo;/g , "“");
        htmlStr = htmlStr.replace(/&rdquo;/g , "”");
        return htmlStr;
    }

    //Pok&eacute;mon

    const [itr,setitr]=React.useState(0);
    const [isCorrect,setIsCorrect]=React.useState([false,false,false,false]);
    const [isWrong,setIsWrong]=React.useState([false,false,false,false]);
    const [Correct,setCorrect]=React.useState(false);
    const [Wrong,setWrong]=React.useState(false);
    const [answered,setAnswered]=React.useState(false);

    console.log(props.questions);

/////////////////////////////////////////////////////////////If quiz array didnt load properly/////////////////////////////////////////////////////////////
   
    if(props.questions.length===0)
    {
        return(
        <Error />
        );
    }
    else
    {    
        const questionsArr=props.questions.results;
/////////////////////////////////////////////////////////////Check if answer is correct/////////////////////////////////////////////////////////////
        
        function checkAnswer(event)
        {
            if(!answered)
            {
                setAnswered(true);
                if(event.target.outerText===unEscape(questionsArr[itr-1].correct_answer))
                {
                    const newArr=[false,false,false,false];
                    newArr[corrAnswerkey]=true;
                    setCorrect(true);
                    setIsCorrect(newArr);
                    score++;
                }
                else
                {
                    const newWrongArr=[true,true,true,true];
                    const newCorrArr=[false,false,false,false];
                    newCorrArr[corrAnswerkey]=true;
                    setWrong(true);
                    setIsCorrect(newCorrArr);
                    setIsWrong(newWrongArr);
                }
                event.preventDefault();
            }
        }

/////////////////////////////////////////////////////////////Load next question/////////////////////////////////////////////////////////////
        
        function loadNextQuestion()
        {
            if(Wrong===true)
            {
                const response=WrongAnswerResponse[Math.floor(Math.random()*WrongAnswerResponse.length)];
                return (
                    <div className="nextQuestion">
                        <h2>{response}</h2>
                        <button className="nextButton" onClick={newQuestion}>Next 🡲</button>
                    </div>
                )
            }
            else if(Correct===true)
            {
                const response=CorrAnswerResponse[Math.floor(Math.random()*CorrAnswerResponse.length)];
                return (
                    <div className="nextQuestion">
                        <h2>{response}</h2>
                        <button className="nextButton" onClick={newQuestion}>Next 🡲</button>
                    </div>
                )
            }
            else
            {
                return;
            }
        }

////////////////////////////////////////////////////////////New question///////////////////////////////////////////////////////////////

        if(itr===0)
        {
            newQuestion();
            score=0;
        }

        if(itr===10)
        {
            return (<Score
                score={score}
                 />);
        }

        function newQuestion()
        {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setitr(itr+1);
            corrAnswerkey=Math.floor(Math.random()*4);
            theQuestion=questionsArr[itr].question;
            setWrong(false);
            setCorrect(false);
            setAnswered(false);
            setIsWrong([false,false,false,false]);
            setIsCorrect([false,false,false,false]);
            answersArr[corrAnswerkey]=questionsArr[itr].correct_answer;
            var count=0;
            for(var i=0;i<4;i++)
            {
                if(answersArr[i]===questionsArr[itr].correct_answer)
                {
                    continue;
                }
                else
                {
                    answersArr[i]=questionsArr[itr].incorrect_answers[count];
                    count++;
                }
            }
        }

    
/////////////////////////////////////////////////////////////Return HTML///////////////////////////////////////////////////////////////////////

        return (
            <div className="quiz">
            <Header />
                <div className="question">
                    <h1 className="questionText">{unEscape(theQuestion)}</h1>
                </div>
                {loadNextQuestion()}
                <div className="options">
                <div className={isWrong[0]?isCorrect[0]?"option correct":"option wrong":isCorrect[0]?"option correct":"option"} onClick={checkAnswer} name={0}>
                    <h1 className="optionText" value={answersArr[0]}>{unEscape(answersArr[0])}</h1>
                </div>
                <div className={isWrong[1]?isCorrect[1]?"option correct":"option wrong":isCorrect[1]?"option correct":"option"} onClick={checkAnswer}>
                    <h1 className="optionText" value={answersArr[1]}>{unEscape(answersArr[1])}</h1>
                </div>
                <div className={isWrong[2]?isCorrect[2]?"option correct":"option wrong":isCorrect[2]?"option correct":"option"} onClick={checkAnswer}>
                    <h1 className="optionText" value={answersArr[2]}>{unEscape(answersArr[2])}</h1>
                </div>
                <div className={isWrong[3]?isCorrect[3]?"option correct":"option wrong":isCorrect[3]?"option correct":"option"} onClick={checkAnswer}>
                    <h1 className="optionText" value={answersArr[3]}>{unEscape(answersArr[3])}</h1>
                </div>
                </div>
            </div>
        )
    }
}

export default Quiz;