import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Scoreboard(props) {
  console.log(props);

  return (
    <ul>
      {props.players.map(player => (
        <li>{player.name} - {player.score}%</li>
      ))}
    </ul>
  )
}

export default Scoreboard;