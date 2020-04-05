import React from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import {Parallax} from 'react-parallax'
class TeamMember extends React.Component {
    render() {  
      return (
      <Parallax bgImage={this.props.img} strength={100}>
        <Card style={{ width: '18rem',backgroundColor:"rgba(150, 80, 131, 0.863)",margin:"1vw"}}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Table striped bordered hover size="sm">
              <tbody style={{ backgroundColor:"rgba(150, 80, 131, 0.863)"}}>
                <tr><td>Name:</td><td style={{textAlign:"center"}}> {this.props.name}</td></tr>
                <tr><td>Age:</td><td style={{textAlign:"center"}}> {this.props.age}</td></tr>
                <tr><td>Height:</td><td style={{textAlign:"center"}}> {this.props.height}</td></tr>
                <tr><td>Weight:</td><td style={{textAlign:"center"}}> {this.props.weight}</td></tr>
                <tr><td>Mvp:</td><td style={{textAlign:"center"}}> {this.props.mvp}</td></tr>
              </tbody>
            </Table>         
          </Card.Body>
        </Card>   
        </Parallax>     
      )
  }}

export default TeamMember