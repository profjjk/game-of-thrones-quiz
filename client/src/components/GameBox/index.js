import React, { useState, useEffect } from 'react';
import './index.css';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import GameOver from '../GameOver';
import ScoreBoard from '../ScoreBoard';
import Timer from '../Timer';
import { questions }  from '../../utils/questions.js';

function GameBox(props) {
  // Database variables.
  const [quizList, setQuizList] = useState(questions);
  const [players, setPlayers] = useState();

  // Display & hide Quiz component.
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const displayQuiz = () => {
    setShowWelcome(false);
    setShowQuiz(true);
    props.setTimerActive(true);
  }
  // Display & hide Gameover component.
  const [showGameover, setShowGameover] = useState(false);
  const displayGameover = () => {
    setShowQuiz(false);
    props.setTimerActive(false);
    setShowGameover(true);
  }
  // Display & hide Scoreboard component.
  const [showScoreboard, setShowScoreboard] = useState(false);
  const displayScoreboard = () => {
    setShowGameover(false);
    setShowWelcome(false);
    props.setTimerActive(false);
    setShowScoreboard(true);
  }

  // Retrieve and scramble questions from database.
  const scrambleQuiz = arr => {
    let questions = arr;
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    return questions;
  };
  useEffect(() => {
    setQuizList(scrambleQuiz(questions));
  }, []);

  // Retrieve and limit players from database.
  const mostRecent = arr => {
    let array = arr.reverse()
    if (array.length > 10) {
      return array.slice(0, 10);
    } else {
      return array;
    }
  }

  // Show gameover when timer runs out.
  useEffect(() => {
    if (props.time < 0) {
      setShowQuiz(false);
      props.setTimerActive(false);
      setShowGameover(true);
    }
  }, [props.time])

  return (
    <>
      {
        props.timerActive ?
        <Timer 
          time={props.time} 
        /> : ""
      }
      <div id="gamebox">
        { 
          showWelcome ? 
          <Welcome 
            displayQuiz={displayQuiz} 
            displayScoreboard={displayScoreboard} 
          /> : "" 
        }
        { 
          showQuiz ? 
          <Quiz 
            displayGameover={displayGameover} 
            quizList={quizList} 
            wrongAnswer={props.wrongAnswer} 
            updateScore={props.updateScore} 
          /> : "" 
        }
        { 
          showGameover ? 
          <GameOver 
            displayScoreboard={displayScoreboard} 
            score={props.score} 
          /> : "" 
        }
        { 
          showScoreboard ? 
          <ScoreBoard 
            score={props.score} 
            players={players} 
          /> : "" 
        }
      </div>
    </>
  )
}

export default GameBox;