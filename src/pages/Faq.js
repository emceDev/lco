import React from 'react';
import Question from '../components/Question'
import questions from '../data/questions'

function Faq() {
  return (
    <div className="Faq">
    {
      questions.questions.map(question =>{
      return <Question key={question.id} name={question.name} text={question.text}/>
      })
    }
    <p>Wanna ask somethin?</p>
    </div>
  );
}

export default Faq;
