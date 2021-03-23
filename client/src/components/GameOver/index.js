import React, { useRef } from 'react';
import './index.css';

function GameOver() {
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1 className=" fancy large center">Valar Morghulis</h1>
      <h4 className="medium center">Score: </h4>
      <div id="form">
        <input type="text" placeholder="Enter your name..." ref={inputRef} />
        <button className="btn submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default GameOver;