import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import AssignWorker from './AssignWorker';
import Select from 'react-select';
import { connect } from 'react-redux';


class WorkerSearch extends Component {
    constructor() {
        super(); 
	this.handleChange = this.handleChange.bind(this);
        this.state = {
            workers: [],
	    showWorker:false,
	    selectedOption: null
        };
    }


handleChange = (selectedOption) => {
    let worker=this.state.initialWorkers.filter((worker)=>worker.id === selectedOption.value);
    this.setState({ selectedOption ,showWorker: true, worker: worker});
}


componentDidMount() {
    let initialWorkers = [];
    fetch('http://localhost:3000/workers')
        .then(response => {
            return response.json();
        }).then(data => {
        initialWorkers = data.map((worker) => {
            return worker
        });
	
        console.log(initialWorkers);

	let optionItems = initialWorkers.map((worker) =>
		{return {value: worker.id, label: worker.name}});
	this.setState({optionItems: optionItems, initialWorkers: initialWorkers});
	
    });
}


render() {

    return (
	<div>
	   <h1>Edit Worker Tasks</h1>
		<p>
	<Select
        	value={this.state.selectedOption}
        	onChange={this.handleChange}
        	options={this.state.optionItems}
		placeholder="Select a worker to edit"
      	/>
	</p>
	   
	{console.log(`passedin`,this.state.worker)}
	{this.state.showWorker ? <AssignWorker worker={this.state.worker} allboats={this.props.allboats} /> : '' }
	
	</div>
    );
}
}

export default connect() (WorkerSearch);

