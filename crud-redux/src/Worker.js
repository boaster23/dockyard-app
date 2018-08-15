import React from 'react';

class Worker extends React.Component {
    constructor() {
        super();
    }

    render () {
        let workers = this.props.state.workers;

        let optionItems = workers.map((worker) =>
                <option value={worker.name}>{worker.name}</option>
            );

        return (
         <div>
             <select value={this.props.boatid}>
		<option value="--select--">--select--</option>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Worker;
