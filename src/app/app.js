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

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      boats: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/boats"
    fetch(url)
	.then(resp => resp.json())
	.then(data => {
	    let boats = data.map((boat, index) => {
		return (
		    <div key={index}>
			<h3>{boat.name}</h3>
			<p>Tags: {boat.photo}</p>
		    </div>
		)
	     })
	     this.setState({boats: boats});
	})
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
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
	<div>
		<h1>Boats</h1>
		{this.state.boats}	
	</div>
      </div>
    );
  }
}

export default App;

