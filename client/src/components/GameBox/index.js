import React, { useState, useEffect } from 'react';
import './index.css';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import GameOver from '../GameOver';
import ScoreBoard from '../ScoreBoard';


function GameBox() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGameover, setShowGameover] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);

  const displayQuiz = () => {
    setShowWelcome(false);
    setShowQuiz(true);
  }
  const displayGameover = () => {
    setShowQuiz(false);
    setShowGameover(true);
  }
  const displayScoreboard = () => {
    setShowGameover(false);
    setShowScoreboard(true);
  }
  const handleBtnClick = event => event.preventDefault();

  useEffect(() => {

  }, [])

  return (
    <div id="gamebox">
      { showWelcome ? <Welcome displayQuiz={displayQuiz} displayScoreboard={displayScoreboard} /> : "" }
      { showQuiz ? <Quiz displayGameover={displayGameover} /> : "" }
      { showGameover ? <GameOver displayScoreboard={displayScoreboard} /> : "" }
      { showScoreboard ? <ScoreBoard /> : "" }
    </div>
  )
}

export default GameBox;