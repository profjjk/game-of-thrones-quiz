import React, { useState, useEffect } from 'react';
import './index.css';
import quiz from '../../utils/questions.json';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let questions = quiz;
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    setQuestions(questions);
    console.log(questions);
  }, []);

  return (
    <>
      <div className="question-area"></div>
      <hr/>
      <div className="answer-area"></div>
      <hr/>
      <div className="footnotes"></div>
    </>
  )
}

export default Quiz;