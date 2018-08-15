import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';


class AssignWorker extends React.Component {
  
state = {
    selectedOption: null
}

componentDidMount() {
	let optionsArr=[];
   	let options = this.props.boats.map((boat) => {
   	   optionsArr.push({value: boat.id , label: boat.name});
   	});
	this.setState({opts:optionsArr})
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
