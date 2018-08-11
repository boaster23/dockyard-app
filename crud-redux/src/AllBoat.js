import React, { Component } from 'react';

import { connect } from 'react-redux';


import EditComponent from './EditComponent';

class AllBoat extends Component {

	constructor(props) {
    		super(props);

    	
    	this.state = {
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
		    <div key={index} className="col-sm-6">
			<h3>{boat.name} - {boat.type}</h3>
			<p><img src={boat.photo} /></p>
		    </div>
		)
	     })
	     this.setState({boats: boats});
	})
  }

    render() {
        return (
            <div>
                <h1>All Boats</h1>
                {this.state.boats}
            </div>
        );
    }
}


export default AllBoat;
