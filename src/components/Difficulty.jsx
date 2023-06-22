import React from "react";

function Difficulty(props)
{
    function changeDiff(event)
    {
        if(event.target.value==="Any")
        {
            props.setDiff("");
        }
        else
        {
            props.setDiff("&difficulty="+event.target.value);
        }
    }

    return (
    <div className="difficultySelector">
        <h2 className="difficultyTitle">Difficulty</h2>        
        <select name="difficulty" className="difficultyDropdown" onChange={changeDiff}>
            <option value="Any">Any</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
    </div>);
}

export default Difficulty;