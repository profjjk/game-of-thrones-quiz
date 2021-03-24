import React from 'react';
import './index.css';

function Timer(props) {
  let seconds = parseInt(props.time % 60, 10);
  let minutes = parseInt(props.time / 60);

  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    <div id="timer">
      Timer 
      <span id="countdown">{minutes}:{seconds}</span>
    </div>
  )
}

export default Timer;