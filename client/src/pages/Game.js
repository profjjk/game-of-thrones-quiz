import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import GameBox from '../components/GameBox';

function Game() {
  const [time, setTime] = useState(300);
  const [timerActive, setTimerActive] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timerActive && time > 0) {
      const interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerActive, time])

  const wrongAnswer = () => {
    setTime(time => time - 20)
  }
  const updateScore = () => {
    setScore(score => score + 10)
  }

  return (
    <>
    <Header score={score} />
    <GameBox 
      timerActive={timerActive}
      setTimerActive={setTimerActive} 
      time={time} 
      wrongAnswer={wrongAnswer} 
      updateScore={updateScore} 
      score={score} 
      time={time} 
    />
    </>
  )
}

export default Game;