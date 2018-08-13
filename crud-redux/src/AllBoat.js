import React, { Component } from 'react';
import { connect } from 'react-redux';

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


import ShowBoat from './ShowBoat';
import Boat from './Boat';


class AllBoat extends Component {

	constructor(props) {
    		super(props);

    	
    	
  	}

    componentDidMount() {
    let url = "http://localhost:3000/boats"
 	
    fetch(url)
	.then(resp => resp.json())
	.then(data => {
		console.log(data)
	    this.props.dispatch({type:'LOAD_BOATS', data})
	
	})
    }

    render() {
        return (
            <div>
	    	<div className="row">
{console.log(this.props.boats)}
		 {this.props.boats.map((boat) => (
		
		    <div  className="col-sm-6" >
			{console.log(boat)}

		
		{boat.detailview ? <ShowBoat boat={boat} /> : <Boat boat={boat} />}	
			
		    </div>
		))}
            	</div>
	   </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boats: state
    }
}

export default connect(mapStateToProps)(AllBoat);
