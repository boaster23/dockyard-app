import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import AssignWorker from './AssignWorker';


class WorkerSearch extends Component {
    constructor() {
        super();
	this.handleChange = this.handleChange.bind(this);
        this.state = {
            workers: [],
	    showWorker:false
        };
    }

handleChange(e) {
    this.setState({ 
	workerid: e.target.value,
	showWorker: true
 });
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
        this.setState({
            workers: initialWorkers,
	    workerid: 0
        });
	
	
    });
}



render() {
    let workers = this.state.workers;

    let optionItems = workers.map((worker) =>
        <option value={worker.id} >{worker.name}</option>
    );
    return (
	<div>
	   <h1>Edit Worker Tasks</h1>
	   
           <select onChange={this.handleChange}>
		<option value="0"></option>
                {optionItems}
           </select>
	
	{this.state.showWorker ? <AssignWorker workerid={this.state.workerid} /> : '' }
	</div>
    );
}
}


export default WorkerSearch;


