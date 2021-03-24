import React, { useState } from 'react';
import './index.css';

function Quiz(props) {
  const [progress, setProgress] = useState(0);

  const handleBtnClick = event => {
    event.preventDefault();

    if (progress < props.quizList.length - 1) {
      if (event.currentTarget.value == props.quizList[progress].correct) {
        props.updateScore();
      } else {
        props.wrongAnswer();
      }
      setProgress(progress + 1)
    } else {
      props.displayGameover();
    }
  }

  return (
    <>
      <div className="question-area">
        <h3 className="question">{props.quizList[progress].q}</h3>
      </div>
      <hr/>
      <div className="answer-area">
        {props.quizList[progress].a.map(answer => {
          return (
            <>
              <button className="btn answer" onClick={handleBtnClick} value={answer} key={answer}>
                {answer}
              </button>
              <br/>
            </>
          )
        })}
      </div>
      <hr/>
      <div className="footnote-area">
        <p className="footnote">{props.quizList[progress].footnote}</p>
      </div>
    </>
  )
}

export default Quiz;