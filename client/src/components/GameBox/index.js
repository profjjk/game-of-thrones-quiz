import React, { useState, useEffect } from 'react';
import './index.css';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import GameOver from '../GameOver';


function GameBox() {
  const [welcome, setWelcome] = useState(true);
  const [quiz, setQuiz] = useState(false);
  const [gameover, setGameover] = useState(false);

  return (
    <div id="gamebox">
      { welcome ? <Welcome /> : "" }
      { quiz ? <Quiz /> : "" }
      { gameover ? <GameOver /> : "" }
    </div>
  )
}

export default GameBox;