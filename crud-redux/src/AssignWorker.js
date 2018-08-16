import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import APIData from './APIData';


class AssignWorker extends React.Component {
  
state = {
    selectedOption: null
}

componentDidMount() {
	let boatIdArray=[];
	let i=[];
	console.log(this.props.worker[0].boatIds)
	let wopts = this.props.worker[0].boatIds.map((boatid) =>{
		i=this.props.boats.filter((boat)=>boat.id == boatid);
		boatIdArray.push({value: boatid, label: i[0].name})	
	});
	let optionsArr=[];
   	let options = this.props.boats.map((boat) => {
   	   optionsArr.push({value: boat.id , label: boat.name});
   	});
	this.setState({opts:optionsArr, selectedOption: boatIdArray})
}
  
handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
}

handleUpdate = (e) => {
	e.preventDefault();                                           
	let API_PATH = '/workers/'+this.props.worker[0].id
	let boatids = this.state.selectedOption.map((ids) => {return ids.value}); 

	APIData({method:"PATCH",data: boatids, API_PATH: API_PATH});
}
  
render() {
   const { selectedOption,opts } = this.state;  

    return (
      <div>
      	<p>&nbsp;</p>
	<form onSubmit={this.handleUpdate}> 
	<p>
	<Select
        	value={selectedOption}
        	onChange={this.handleChange}
        	options={opts}
		isMulti
		placeholder="Please select boats for this worker"
      	/>
	</p>
	
	<p><button>Update</button><br /><br /></p>
	</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        boats: state
    }
}

export default connect(mapStateToProps)(AssignWorker)
