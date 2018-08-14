import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';

class ShowBoat extends Component {


  render() {
    const { boat } = this.props;	
//const boat = boats.find(p => p.id == this.props.id);

    return boat ? (
      <div>     
        <h3>{boat.name}</h3>
        <p><img src={boat.photo} /></p>
	<p><strong>Type: </strong>{boat.type}</p>
        <p><strong>Work Description:</strong><br />{boat.work_description}</p>
	<p><strong>Photo: </strong><br />{boat.photo}</p>
	<p><strong>Length: </strong><br /> {boat.length}</p>
	<p><strong>Arrival date: </strong> 
	{boat.arrival_date} />
	</p> 
	<p><strong>Delivery date: </strong>{boat.delivery_date} </p>
	<p><strong>Status: </strong> {boat.status} </p>
	<button
        onClick={()=>this.props.dispatch({type:'EDIT_BOAT',id:boat.id})}>
        Edit</button>&nbsp;
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
