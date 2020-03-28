import React from 'react';
class Question extends React.Component {
    render() {

      return ( 
      <div className="Question">
          <p>Name: {this.props.name}</p>
          <p>Content: {this.props.text}</p>
      </div>
      )
  }}

export default Question