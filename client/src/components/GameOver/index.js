import React, { useRef } from 'react';
import './index.css';
import { questions }  from '../../utils/questions.js';

function GameOver(props) {
  const totalPossible = questions.length * 10;

  return (
    <div>
      {(Math.floor((props.score / totalPossible) * 100) < 60) ?
      (<h1 className="fancy large center"><a href="https://awoiaf.westeros.org/index.php/Valar_morghulis" target="_blank">Valar Morghulis</a></h1>) :
      (<h1 className="fancy large center">The Throne Is Yours!</h1>)}
      <h4 className="medium center">Score: {Math.floor((props.score / totalPossible) * 100)}%</h4>
    </div>
  )
}

export default GameOver;