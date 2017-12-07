import React, {Component} from 'react';
import { Container,Table,Row,Col,NavItem,NavLink,Nav} from 'reactstrap';


class Incident extends Component {
  constructor(props){
      super(props)

      this.state = {
        incident : []
      }
      this.fetchData();
    }

     fetchData(){
      fetch("https://municom.herokuapp.com/api/incident")
      .then(data => {
        return data.json()})
      .then(body => {
        console.log(body);
        this.setState({
          incident: body
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
              <NavLink active href="/incident">Incident</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/request">Request</NavLink>
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
        <h2>Incident</h2>
          <Table striped>
           <thead>
             <tr>
               <th>#</th>
               <th>Title</th>
               <th>Discription</th>
               <th>Address</th>
               <th>Picture</th>
             </tr>
           </thead>
           <tbody>
           {this.state.incident.map((incident,index) =>(
             <tr key={index}>
               <th scope="row">{index + 1}</th>
               <td>{incident.title}</td>
               <td>{incident.description}</td>
               <td>{incident.address}</td>
               <td><a href={incident.image} target="_blank"><img src={incident.image} alt="incident" width={150} height={150}/></a></td>
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

export default Incident;
