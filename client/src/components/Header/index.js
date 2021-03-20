import React from 'react';
import './index.css';
import Timer from '../Timer';

function Header() {
  return (
    <header className="row">
      <button id="scoreboard">Scoreboard</button>
      <Timer />
      <div>
        <h1 id="title">Game of Thrones</h1>
        <h5 id="subtitle">Fan Quiz</h5>
      </div>
    </header>
  )
}

export default Header;