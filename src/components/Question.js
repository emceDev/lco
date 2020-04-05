import React from 'react';
class Question extends React.Component {
    render() {

      return ( 
      <div className="question">
          <p onClick={(event)=>{
            const x=event.target.nextSibling
            if(x.style.display ==="block"){
              x.style.display="none"
            }else{
              x.style.display="block"
            }
          }}>> {this.props.text}</p>
          <p>{this.props.answer}</p>
      </div>
      )
  }}

export default Question