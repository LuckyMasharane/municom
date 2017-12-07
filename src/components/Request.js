import React, {Component} from 'react';
import { Container,Table,Row,Col,NavItem,NavLink,Nav} from 'reactstrap';


class Request extends Component {
  constructor(props){
      super(props)

      this.state = {
        requests : [],
        reqNr:0
      }
      this.fetchData();
    }



     fetchData(){
      fetch("https://municom.herokuapp.com/api/request")
      .then(data => {
        return data.json()})
      .then(body => {
        this.setState({
          requests: body
        });
      });
    }
  render(){
    return(
      <div>
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
                <NavLink active href="/request">Request</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/complaint">Complaint</NavLink>
              </NavItem>

              <NavItem>
                <NavLink >======================</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/notifications">Update Notification</NavLink>
              </NavItem>

              <NavItem>
                  <NavLink href="">Project History</NavLink>
              </NavItem>
            </Nav>
          </Col>
        <Col sm={8} md={7} className="d-none d-sm-block sidebar">
        <h2>Request</h2>
          <Table striped>
           <thead>
             <tr>
               <th>#</th>
               <th>Title</th>
               <th>Discription</th>
               <th>Address</th>
             </tr>
           </thead>
           <tbody>
           {this.state.requests.map((request,index) =>(
             <tr key ={index}>
               <th scope="row">{index + 1}</th>
               <td>{request.title}</td>
               <td>{request.description}</td>
               <td>{request.address}</td>
             </tr>
           ))}
           </tbody>
         </Table>
         </Col>
         <Col sm={2} md={2} className="d-none d-sm-block bg-light sidebar">
            <Table striped>
                <thead>
                  <tr>
                    <th>Notification</th>
                  </tr>
                </thead>
            </Table>
         </Col>
         </Row>
         </Container>
      </div>
    )
  }
}

export default Request;
