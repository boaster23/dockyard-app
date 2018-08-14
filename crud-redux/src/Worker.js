import React from 'react';

class Worker extends React.Component {
    constructor() {
        super();
    }

    render () {
        let workers = this.props.state.workers;
        let optionItems = workers.map((worker) =>
                <option key={worker.name}>{worker.name}</option>
            );

        return (
         <div>
             <select>
		<option key="--select--">--select--</option>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Worker;
