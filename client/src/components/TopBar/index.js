import React from 'react';
import Timer from '../Timer';

function TopBar() {
  return (
    <header className="row">
      <button>Scoreboard</button>
      <div>
        <h1>Game of Thrones</h1>
        <h5>Quiz</h5>
      </div>
      <Timer />
    </header>
  )
}

export default TopBar;