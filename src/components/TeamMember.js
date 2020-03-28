import React from 'react';
class TeamMember extends React.Component {
    render() {  
      return ( 
      <div className="teamMember">
          <table>
            <tbody>
            <tr><td>Name:</td><td style={{textAlign:"center"}}> {this.props.name}</td></tr>
            <tr><td>Age:</td><td style={{textAlign:"center"}}> {this.props.age}</td></tr>
            <tr><td>Height:</td><td style={{textAlign:"center"}}> {this.props.height}</td></tr>
            <tr><td>Weight:</td><td style={{textAlign:"center"}}> {this.props.weight}</td></tr>
            <tr><td>Mvp:</td><td style={{textAlign:"center"}}> {this.props.mvp}</td></tr>
            </tbody>
          </table>
      </div>
      )
  }}

export default TeamMember