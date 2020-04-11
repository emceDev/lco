import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:false
        };
      }
      componentDidUpdate(prevProps) {
        if (this.props.display !== prevProps.display) {
          this.setState({display:this.props.display})
        }
      }
    render(){
        return(
            <div className="Modal" style={{display:this.state.display?"flex":"none"}}>
                <span onClick={()=>{this.setState({display:false})}}>x</span>
                <Form style={{margin:"0 auto"}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{backgroundColor:"#520051"}}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }}

export default LogIn;
