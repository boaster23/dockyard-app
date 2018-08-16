import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBoat from './EditBoat';
import BoatForm from './BoatForm';

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

   	  this.state = {
     	    showForm: false
    	  };
  	}

    componentDidMount() {
    let url = "http://localhost:3000/boats"
    let initialBoats = [];
    fetch(url)
	.then(resp => resp.json())
	.then(data => {
	    initialBoats = data.map((boat) => {
               return boat
            });
		console.log(initialBoats)
	    	this.props.dispatch({type:'LOAD_BOATS', initialBoats})
	
	})
    }

    render() {
	console.log(this.props.boatsStore)
        return (
            <div>
	      <div className="row">
		  <div className="col-4">
		 	<BoatForm /> 
		  </div>
		  <div className="col-8">
		     <div className="row">
		 	{this.props.boatsStore.map((boat) => (
				
		    		<div className="col-6" >
				{console.log(boat)}
				{boat.detailview ? <ShowBoat boat={boat} /> : boat.editing ? <EditBoat boat={boat} /> : <Boat boat={boat} />}
		    		</div>
			))}
		     </div>
		 </div>
	      </div>
            </div> 
	   
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boatsStore: state
    }
}

export default connect(mapStateToProps)(AllBoat);
