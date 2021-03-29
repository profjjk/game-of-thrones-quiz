import React from 'react';
import './index.css';

function Scoreboard(props) {

  return (
    <div>
      {props.players.map(player => (
        <p className="player">{player.name} - {player.score}%</p>
      ))}
    </div>
  )
}

export default Scoreboard;