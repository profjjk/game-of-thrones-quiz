import React from 'react';
import './index.css';
import Timer from '../Timer';

function Header(props) {
  return (
    <header className="row">
      <button id="scoreboard">Scoreboard</button>
      <Timer time={props.time} />
      <div>
        <h1 id="title">Game of Thrones</h1>
        <h5 id="subtitle">Fan Quiz</h5>
      </div>
    </header>
  )
}

export default Header;