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
			<div className="col-sm-4">
		 		<BoatForm /> 
			</div>
			<div className="col-sm-8">
		   		<div className="row">
		 			{this.props.boats.map((boat) => (
		    				<div className="col-sm-6" >

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
        boats: state
    }
}

export default connect(mapStateToProps)(AllBoat);
