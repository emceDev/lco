import React from 'react';
import Question from '../components/Question'
import questions from '../data/questions'

function Faq() {
  return (
    <div className="faq">
      <div className='questionsContainer'>
      <p style={{textAlign:"center",fontSize:"xx-large"}}>Frequently asked questions:</p>
    {
      questions.questions.map(question =>{
      return <Question key={question.id} text={question.text} answer={question.answer}/>
      })
    }
    </div>
    </div>
  );
}

export default Faq;
