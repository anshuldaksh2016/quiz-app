import React, { useState } from 'react';
import Question from './Data';
import './App.css'
export default function App() {
  {/* create state variable for questions tracking  */ }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  function clickHandler() {

    if (currentIndex === Question.length - 1) {
      setQuizFinished(true);
    }
    setCurrentIndex(value => value + 1);
  }

  return (

    <div className="App">
      <h1>Quiz App using React </h1>

      {/* checking the quiz finished first */}

      { quizFinished ? (<div className="score-section">You scored {currentIndex} out of {Question.length}</div>) :

        (<>
          <div className="questions-section">
            <div className="question-count">
              <span>Question {currentIndex}</span>
            </div>
            <div className="question-text">
              {Question[currentIndex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {Question[currentIndex].answerOptions.map(answer => {
              return (
                <button onClick={clickHandler} key={answer.answerText}>{answer.answerText}</button>
              )
            })}
          </div>



        </>
        )
      }




    </div >
  );
}


