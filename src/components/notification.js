import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input , Container, Row, Col,
      Nav, NavItem, NavLink } from 'reactstrap';


class Notificate extends Component {
    constructor(props){
        super(props);
        this.state = {
          notifications: []
        }
        this.handleSubmit =this.handleSubmit.bind(this);
      }
  
    handleSubmit(e) {
      e.preventDefault();
      let obj = {
        "province": this.state.province,
        "municipality": this.state.municipality,
        "description":this.state.description,
        "budget":this.state.budget,
        "company":this.state.company,
        "date":this.state.date
      }
      console.log(obj);
      fetch('https://municom.herokuapp.com/api/notification', {
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
                        <NavLink  href="/dashboard">Dashboard</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/incident">Incident</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink  href="/request">Request</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink href="/complaint">Complaint</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink >======================</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink active href="/notifications">Update Notification</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Project History</NavLink>
                    </NavItem>
                
                </Nav>
            </Col>
                
                <Col sm="4">
                    <Form onSubmit={this.handleSubmit}>
                        <h1> Update information </h1>
                        <FormGroup>
                            <Label for="province">Province</Label>
                            <Input type="text" onChange={(e)=>{this.setState({province: e.target.value})}} name="province" id="exampleEmail"  />
                        </FormGroup>

                        <FormGroup>
                            <Label for="municipality">Municipality</Label>
                            <Input type="text" onChange={(e)=>{this.setState({municipality: e.target.value})}} name="municipality" id="examplePassword" />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="description">Description </Label>
                            <Input type="textarea" onChange={(e)=>{this.setState({description: e.target.value})}} name="text" id="exampleText" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="budget">Budget</Label>
                            <Input type="text" onChange={(e)=>{this.setState({budget: e.target.value})}} name="text" id="exampleText"  />
                        </FormGroup>

                        <FormGroup>
                            <Label for="company">Company Name</Label>
                            <Input type="text" onChange={(e)=>{this.setState({company: e.target.value})}} name="text" id="exampleText" />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="date">Date Awarded</Label>
                            <Input type="date" name="date" id="exampleText" />
                        </FormGroup>
                        
                        <Button color="success" type ="submit">Submit</Button>
                    </Form>
                </Col>
            
            </Row>
      </Container>
    )
  }
}

export default Notificate;