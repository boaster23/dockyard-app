import React, { Component } from 'react';

import {connect} from 'react-redux';

class Boat extends Component {
  render() {

  const { boat } = this.props;
  return (
	<div>
	{console.log(boat.id)}

	<a onClick={()=>this.props.dispatch({type:'LOAD_BOAT',id:boat.id, detailview:true})}>
	<h3 >{boat.name} - {boat.type}</h3>
	
	<p><img src={boat.photo} className="img-responsive" /></p>
	
	</a>
	</div>	
  );
 }
}
export default connect()(Boat);
