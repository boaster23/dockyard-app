import React, { Component } from 'react';

import {connect} from 'react-redux';

class Boat extends Component {
  render() {
  return (
	<div>
	{console.log(this.props.boat.id)}

	<a href="#" onClick={()=>this.props.dispatch({type:'LOAD_BOAT',id:this.props.boat.id, detailview:true})}>
	<h3 >{this.props.boat.name} - {this.props.boat.type}</h3>
	
	<p><img src={this.props.boat.photo} /></p>
	</a>
	</div>	
  );
 }
}
export default connect()(Boat);
