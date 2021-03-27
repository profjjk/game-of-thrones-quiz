import React, { useRef } from 'react';
import './index.css';
import questions from '../../utils/questions.json';
import API from '../../utils/API';

function GameOver(props) {
  const inputRef = useRef();

  const totalPossible = questions.length * 10;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputRef.current.value)
    API.savePlayer({
      name: inputRef.current.value
    }).catch(err => console.error(err));
    inputRef.current.value = "";
    // Show scoreboard
  }

  return (
    <div>
      <h1 className=" fancy large center"><a href="https://awoiaf.westeros.org/index.php/Valar_morghulis" target="_blank">Valar Morghulis</a></h1>
      <h4 className="medium center">Score: {Math.floor((props.score / totalPossible) * 100)}%</h4>
      <div id="form">
        <input type="text" placeholder="Enter your name..." ref={inputRef} />
        <button className="btn submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default GameOver;