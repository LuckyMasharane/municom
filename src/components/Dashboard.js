import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Container ,Row ,Col ,NavLink ,NavItem ,Nav ,Table } from 'reactstrap';
import 'chart.piecelabel.js';

class Dashboard extends Component {

componentDidMount(){
  this.renderPieChartData();
}
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      users:[],
      reqNr:0,
      nrRequests:0,
      nrComplaints:0,
      nrIncidents:0,
    }
    this.fetchData();
  }
  fetchData(){
    fetch("https://municom.herokuapp.com/api/users")
    .then(data => {
      return data.json()})
    .then(body => {
      this.setState({
        users: body
      });
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

    renderPieChartData(){
    
      //fetch requests
     fetch("https://municom.herokuapp.com/api/request")
      .then(data => {
        return data.json()})
      .then(body => {
        
        this.setState({
          nrRequests:body.length
        })
      });

      //fetch incidents
      fetch("https://municom.herokuapp.com/api/incident")
      .then(data => {
        return data.json()})
      .then(body => {
        
        this.setState({
          nrIncidents: body.length
        });
      });

      //fetch complaints
      fetch("https://municom.herokuapp.com/api/complaint")
      .then(data => {
        return data.json()})
      .then(body => {
       
        this.setState({
          nrComplaints: body.length
        });
      });
    }
  render() {

    const pie = {
      labels: [
        'Incident',
        'Complaint',
        'Request'
      ],
      legend:{
        display:true
      },
      datasets: [{
        data: [this.state.nrIncidents,this.state.nrComplaints,this.state.nrRequests],
        backgroundColor: [
        '#FF5733',
        '#28B463',
        '#00FF00'
        ],
        hoverBackgroundColor: [
        '#FF5733',
        '#28B463',
        '#00FF00'
        ]
      }],
      options:{
        
        pieceLabel: {
          render: 'value'
       }
      }
    };
    
    const pieOptions={
      pieceLabel: {
        render: 'value'
     }
    }
    return (
    <Container fluid>
     
          <Row>
            <Col tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
              <Nav pills vertical>
                <NavItem>
                  <NavLink active href="/dashboard">Dashboard</NavLink>
                <NavItem>

                </NavItem>
                  <NavLink href="/incident">Incident</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/request">Request</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/complaint">Complaint</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>==================</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="/notifications">Update Notification</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Project history</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col tag="nav" sm={8} md={7} className="d-none d-sm-block sidebar">
              
              <div className="card">
                <div className="card-header">
                  Dashboard
                </div>
                <div className="card-block">
                  <div className="chart-wrapper">
                    <Doughnut data={pie} options={pieOptions}/>
                  </div>
                </div>
              </div>
              <hr/>
              <h3>Registered Users</h3>
              <hr/>
              <Table >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Picture</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.users.map((users,index) =>(
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{users.email}</td>
                    <th>{users.firstname}</th>
                    <th>{users.lastname}</th>
                    <th>{users.picture}</th> 
                  </tr>
                ))}
                </tbody>
              </Table>
     
            </Col>
            <Col tag="nav" sm={13} md={14} className="d-none d-sm-block bg-light sidebar">
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
    )
  }
}

export default Dashboard;
