import React, {Component} from 'react';
import { Container} from 'reactstrap';


class Profile extends Component {
  render(){
    return(
      <div>
        <Container>
          <p>Name: </p>
          <p>Email: </p>

        </Container>
      </div>
    )
  }
}

export default Profile;
