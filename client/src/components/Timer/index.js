import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);


  return (
    <div>
      Timer
      <span id="countdown"> 0:00</span>
    </div>
  )
}

export default Timer;