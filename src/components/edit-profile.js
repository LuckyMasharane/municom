import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input , Container, Row, Col,
    Nav, NavItem, NavLink } from 'reactstrap';


class Edit extends Component {
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
        "lastname": this.state.lastname,
        "firstname": this.state.firstname,
        "address":this.state.address,
        "picture":this.state.picture,
        "company":this.state.company,
        "date":this.state.date
      }
      console.log(obj);
      fetch('https://municom.herokuapp.com/api/users', {
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
        
        
        this.props.history.push('/dashboard');
  
        });
    }
  render(){
    return(
      <Container fluid>
            <Row>
                <Col tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
                    <Nav pills vertical>
                        <NavItem>
                        <h4>Profile</h4>
                            <p>Email: </p>
                            
                            <NavLink active href="/edit-profile">Edit Profile</NavLink>
                        </NavItem>
                        <hr/>
                        <NavItem>
                            <NavLink  href="/dashboard">Dashboard</NavLink>
                        <NavItem>
                        </NavItem>
                            <NavLink href="/incident">Incident</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/request">Request</NavLink>
                        <NavItem>
                        </NavItem>
                            <NavLink href="/complaint">Complaint</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >======================</NavLink>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                            <NavLink  href="/notifications">Update Notification</NavLink>
                        <NavItem>
                        </NavItem>
                    
                    </Nav>
                </Col>
                <Col sm={8} md={7} className="d-none d-sm-block sidebar">
                    <Form onSubmit={this.handleSubmit}>
                        <h1> Update Profile </h1>
                        <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input type="text" onChange={(e)=>{this.setState({province: e.target.value})}} name="firstname" id="exampleEmail"  />
                        </FormGroup>

                        <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input type="text" onChange={(e)=>{this.setState({municipality: e.target.value})}} name="lastname" id="examplePassword" />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="address">Address </Label>
                            <Input type="address" onChange={(e)=>{this.setState({description: e.target.value})}} name="address" id="exampleText" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="budget">Picture</Label>
                            <Input type="file" onChange={(e)=>{this.setState({budget: e.target.value})}} name="file" id="exampleText"  />
                        </FormGroup>

                        <Button color="success" type ="submit">Submit</Button>
                    </Form>
                </Col>
                <Col sm={3} md={3} className="d-none d-sm-block bg-light sidebar">
                    <h5>information</h5>
                </Col>
            </Row>
      </Container>
    )
  }
}

export default Edit;