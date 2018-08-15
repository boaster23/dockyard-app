import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';


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

  
render() {
   const { selectedOption } = this.state;  


    return (
      <div>
      	
	<p>
	<Select
        	value={selectedOption}
        	onChange={this.handleChange}
        	options={this.state.opts}
		isMulti
		placeholder="Please select boats for this worker"
      	/>
	</p>
	
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
