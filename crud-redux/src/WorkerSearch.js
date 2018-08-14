import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Worker from './Worker';

class WorkerSearch extends Component {
    constructor() {
        super();
        this.state = {
            workers: [],
        };
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
        });
    });
}

render() {
    return (
           <Worker state={this.state}/>
    );
}
}


export default WorkerSearch;


