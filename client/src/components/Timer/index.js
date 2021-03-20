import React, { useState, useEffect } from 'react';
import './index.css';

function Timer() {
  const [time, setTime] = useState(0);


  return (
    <div id="timer">
      Timer
      <span id="countdown"> 0:00</span>
    </div>
  )
}

export default Timer;