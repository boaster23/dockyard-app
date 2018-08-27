import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import APIData from './APIData';


class AssignWorker extends React.Component {

 constructor() {
        super(); 
        this.state = {
	    selectedOption: null
        };
    }


componentDidUpdate(prevProps) {
  if (this.props.worker !== prevProps.worker) {
    this.fetchWorker()
  }
}

//componentWillReceiveProps(nextProps) {
  //if (nextProps.refresh !== refresh) {
//    this.setState({ worker: nextProps.worker}); 
//    this.fetchWorker()  
  //}
//}

fetchWorker() {
	let boatIdArray=[];
	let i=[];
	console.log(`worker`,this.props.worker[0])
	let wopts = this.props.worker[0].boatIds.map((boatid) =>{
		i=this.props.boats.filter((boat)=>boat.id == boatid);
		(i.length ? boatIdArray.push({value: boatid, label: i[0].name}) : '');	
	});
	
   	let options = this.props.boats.map((boat) => {
   	   return {value: boat.id , label: boat.name};
   	});
	this.setState({opts:options, selectedOption: boatIdArray});
	
}

componentDidMount() {
	this.fetchWorker()
}
  
handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
}

handleUpdate = (e) => {
	e.preventDefault();                                     
	let API_PATH = '/workers/'+this.props.worker[0].id
	let boatids = this.state.selectedOption.map((ids) => {return ids.value});
	let sentData={
             ...this.props.worker[0],
		boatIds: boatids
          }
	
	console.log('boatsid'+boatids)
	APIData({method:"PATCH",data: sentData, API_PATH: API_PATH});
	this.props.allboats();
}
  
render() {
   let { selectedOption,opts } = this.state; 
   let { worker } = this.props; 
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
		placeholder="Please select boats for this worker"/>
	</p>
	<p><button>Update</button></p>
	</form>
	<hr />
	<p><img src={worker[0].photo} /></p>
	
	<p><strong>Name: </strong>{worker[0].name}</p>
	<p><strong>Phone: </strong>{worker[0].phone}</p>
	
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
