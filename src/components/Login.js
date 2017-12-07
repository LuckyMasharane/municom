import React from 'react';
import { Button, Form, FormGroup, Label, Input , Container, Row, Col} from 'reactstrap';
//import {withRouter} from "react-router-dom";
//import axios from 'axios';

class Login extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        users: []

      }

      this.handleSubmit =this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    let obj = {
      "email": this.state.email,
      "password": this.state.password
    }
    console.log(obj);
    fetch('https://municom.herokuapp.com/api/user/login', {
        method: 'POST',
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
        ,
        body: JSON.stringify(obj)
      })
      .then((data)=> {
        return data.json()
      }).then((body)=>{
        console.log(body);
      sessionStorage.setItem("user",JSON.stringify(body));
      this.props.history.push('/dashboard');

      });
  }
  render() {
    return (
      <div id ="login">
        <Container >
          <Row>
            <Col>
            </Col>
            <Col sm="4">
              <Form onSubmit={this.handleSubmit}>
                  <h2> Login </h2>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input type="email" onChange={(e)=>{this.setState({email: e.target.value})}} placeholder="email" />
                </FormGroup>

                <FormGroup>
                  <Label for="Password" className="text-light">Password</Label>
                  <Input type="password" onChange={(e)=>{this.setState({password: e.target.value})}} placeholder="password" />
                </FormGroup>

                <Button color="success" size="lg" block type="submit">Login</Button>
              </Form>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Login;
