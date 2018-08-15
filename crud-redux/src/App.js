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


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleworkers = this.toggleworkers.bind(this);
    this.state = {
      isOpen: false,
      showWorker: false
    };
  }

  toggleworkers() {
    this.setState({
      showWorker: !this.state.showWorker
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
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>The Dockyard</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
	<div className="container">
	    <div className="row" >
		<Col>
		<Button onClick={this.toggleworkers}>Assign Workers</Button>
		</Col>
	    </div>
	    <div className="row" >
	    	{this.state.showWorker ? <WorkerSearch /> : <AllBoat /> }
	    </div>
	</div>
    </div>
    );
  }
}


export default App;
