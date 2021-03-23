import React, { useState, useEffect } from 'react';
import './index.css';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import GameOver from '../GameOver';
import ScoreBoard from '../ScoreBoard';
import quiz from '../../utils/questions.json';

const shuffle = array => {
  let questions = array;
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
  return questions;
}

function GameBox() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGameover, setShowGameover] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [quizList, setQuizList] = useState(shuffle(quiz));

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

  return (
    <div id="gamebox">
      { showWelcome ? <Welcome displayQuiz={displayQuiz} displayScoreboard={displayScoreboard} /> : "" }
      { showQuiz ? <Quiz displayGameover={displayGameover} quizList={quizList} /> : "" }
      { showGameover ? <GameOver displayScoreboard={displayScoreboard} /> : "" }
      { showScoreboard ? <ScoreBoard /> : "" }
    </div>
  )
}

export default GameBox;