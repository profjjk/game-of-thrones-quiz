import React from 'react';
import './index.css';

function Welcome(props) {
  return (
    <div id="welcome-container">
      <h1 id="welcome">
        "When you play the game of thrones,<br/> you win or you die."
      </h1>
      <div id="instructions">
        <p>Answer as many questions as you can before the timer runs out.</p>
        <p>Wrong answers will subtract time off the clock.</p>
      </div>
      <button className="btn" id="begin" onClick={props.displayQuiz}>Begin</button>
    </div>
  )
}

export default Welcome;