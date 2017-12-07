import React, {Component} from 'react';
import { Container,Button} from 'reactstrap';
import '../styles/custom.css';


class Home extends Component {
  constructor(props){
    super(props);
      this.state ={
        isLoggedin:false
      }
  }
  render(){
    return(
      <div>
        <section id="cover">
          <Container>
              <main role="main">
                      

                          <h1 className="display-3 text-light">Hello, Municom</h1>
                          <p ><strong>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</strong></p>
                          <p><Button color="success" href="/signup">Sign up Today</Button></p>

                    

                      <div className="container">
                        <div className="row">
                          <div className="col-md-4" >
                            <h2 className="text-light">Incident</h2>
                            <p className="text-light"><strong>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</strong ></p>
                            <p><Button color="success" href="/incident">View more</Button></p>
                              
                          </div>
                          <div className="col-md-4">
                            <h2 className="text-light">Request</h2>
                            <p className="text-light">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><Button color="success" href="/request">View more</Button></p>
                          </div>
                          <div className="col-md-4">
                            <h2 className="text-light">Complaint</h2>
                            <p className="text-light">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><Button color="success" href="/complaint">View more</Button></p>
                          </div>
                        </div>

                      </div>

              </main>
            </Container>
        </section>
      </div>
    )
  }
}

export default Home;
