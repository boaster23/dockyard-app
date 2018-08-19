import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import AllBoat from './AllBoat'; 
import WorkerSearch from './WorkerSearch';
import BoatForm from './BoatForm'; 

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleworkers = this.toggleworkers.bind(this);
    this.togglecreate = this.togglecreate.bind(this);
    this.allboats = this.allboats.bind(this);
    this.state = {
      isOpen: false,
      showScreen: 'AllBoats',
      loadBoats: true
    };
  }

  allboats() {
    this.setState({
      showScreen: 'AllBoats',
      loadBoats: false
    });
  }

  togglecreate() {
    this.setState({
      showScreen: 'Create',
      loadBoats: false
    });
  }

  toggleworkers() {
    this.setState({
      showScreen: 'Workers',
      loadBoats: false
    });
  }
 
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
   
      <div>

        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>The Dockyard</h1>
		<p><Button onClick={this.allboats}>Show All Boats</Button>&nbsp;&nbsp;<Button onClick={this.toggleworkers}>Assign Workers</Button>&nbsp;&nbsp;
<Button onClick={this.togglecreate}>Create a Boat</Button></p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
	<div className="container">
	    <div className="row" >
	    	{this.state.showScreen == 'Workers' ? <WorkerSearch allboats={this.allboats} /> :  this.state.showScreen == 'Create' ? <BoatForm allboats={this.allboats} /> : <AllBoat loadBoats={this.state.loadBoats} />}
	    </div>
	</div>
    </div>
    );
  }
}


export default App;
