import React, { useState, useEffect } from 'react';
import './index.css';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import GameOver from '../GameOver';
import ScoreBoard from '../ScoreBoard';
import API from '../../utils/API';

function GameBox(props) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGameover, setShowGameover] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [quizList, setQuizList] = useState();

  const displayQuiz = () => {
    setShowWelcome(false);
    setShowQuiz(true);
    props.setTimerActive(true);
  }
  const displayGameover = () => {
    setShowQuiz(false);
    props.setTimerActive(false);
    setShowGameover(true);
  }
  const displayScoreboard = () => {
    setShowGameover(false);
    setShowWelcome(false);
    props.setTimerActive(false);
    setShowScoreboard(true);
  }
  const scrambleQuiz = arr => {
    let questions = arr;
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    };
    return questions;
  };

  useEffect(() => {
    API.getQuestions()
      .then(results => {
        setQuizList(scrambleQuiz(results.data));
      })
      .catch(err => console.error(err));
}, []);

useEffect(() => {
  if (props.time < 0) {
    setShowGameover(true);
  }
}, [props.time])

  return (
    <div id="gamebox">
      { showWelcome ? <Welcome displayQuiz={displayQuiz} displayScoreboard={displayScoreboard} /> : "" }
      { showQuiz ? <Quiz displayGameover={displayGameover} quizList={quizList} wrongAnswer={props.wrongAnswer} updateScore={props.updateScore} /> : "" }
      { showGameover ? <GameOver displayScoreboard={displayScoreboard} score={props.score} /> : "" }
      { showScoreboard ? <ScoreBoard score={props.score} /> : "" }
    </div>
  )
}

export default GameBox;