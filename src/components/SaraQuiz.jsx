import React, { useState } from 'react';

// Quiz questions and answers
const quizQuestions = [
  { id: 1, question: 'Sarah Connor is a character in the Terminator series.', answer: true },
  { id: 2, question: 'Sarah Connor was played by Linda Hamilton in all Terminator movies.', answer: false },
  { id: 3, question: 'Sarah Connor is known for her hacking skills.', answer: true },
  { id: 4, question: 'The Terminator was originally sent to protect Sarah Connor.', answer: false },
  { id: 5, question: 'Sarah Connor’s son is named John.', answer: true },
];

// Quiz component 
function Quiz() { 
  const [answers, setAnswers] = useState({}); // state to store the answers
  const [result, setResult] = useState(null); // state to store the result 

  // Function to handle the answer change
  const handleAnswerChange = (questionId, value) => {
    setAnswers({   // set the answers   
      ...answers,  // spread operator to copy the existing answers
      [questionId]: value, // dynamically updates new value
    });
  };

// Function to handle the submit function
  const handleSubmit = () => {
    const score = quizQuestions.reduce((acc, question) => {   // reduce method to calculate the score. acc is the accumulator and question is the current value
      return acc + (answers[question.id] === question.answer ? 1 : 0); // if the answer is correct, add 1 to the accumulator, otherwise add 0
    }, 0);
    setResult(`Your score is ${score} out of ${quizQuestions.length}.`); // set the result to the score
  };

  return (
    <div>
      {quizQuestions.map((question) => (
        <div key={question.id}>
          <div>{question.question}</div>
          <label>
            True
            <input
              type="radio"
              name={`question-${question.id}`}
              onChange={() => handleAnswerChange(question.id, true)}
            />
          </label>
          <label>
            False
            <input
              type="radio"
              name={`question-${question.id}`}
              onChange={() => handleAnswerChange(question.id, false)}
            />
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answers</button>
      {result && <div>{result}</div>}
    </div>
  );
}

export default Quiz;
