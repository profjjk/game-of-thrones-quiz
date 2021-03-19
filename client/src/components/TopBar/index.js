import React from 'react';
import Timer from '../Timer';

function TopBar() {
  return (
    <header className="row">
      <button id="scoreboard">Scoreboard</button>
      <div>
        <h1 id="title">Game of Thrones</h1>
        <h5 id="subtitle">Quiz</h5>
      </div>
      <Timer />
    </header>
  )
}

export default TopBar;