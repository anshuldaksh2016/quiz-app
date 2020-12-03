import React, { useState } from 'react';
import Question from './Data';
import './App.css'
export default function App() {
  {/* create state variable for questions tracking  */ }
  const [currentIndex, setCurrentIndex] = useState(0);

  return (

    <div className="App">
      <h1>Quiz App using React </h1>
      <div className="questions">
        {Question.map(ques => <h2>{ques.questionText}</h2>)}
      </div>


    </div>
  );
}


