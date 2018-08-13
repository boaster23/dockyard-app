import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowBoat extends Component {


  render() {
    const { boat } = this.props;	
//const boat = boats.find(p => p.id == this.props.id);

    return boat ? (
      <div>     
        <h1>{boat.name}</h1>
        <img src={boat.photo} />
        <p>{boat.work_description}</p>
	<p>Length: {boat.length} </p>
	<p>Arrival date: {boat.arrival_date} </p> 
	<p>Delivery date: {boat.delivery_date} </p>
	<p>Status: {boat.status} </p>
	<button
        onClick={()=>this.props.dispatch({type:'EDIT_BOAT',id:boat.id})}>
        Edit</button>
	<button
        onClick={()=>this.props.dispatch({type:'DELETE_BOAT',id:boat.id})}>
        Delete</button>
      </div>
    ) : (
      <div>Error: Boat doesn't exist</div>
    );
  }
}


export default connect()(ShowBoat)
