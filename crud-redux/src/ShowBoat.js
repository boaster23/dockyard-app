import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowBoat extends Component {


  render() {
    const { boats } = this.props;	
    const boat = boats.find(p => p.id == this.props.id);

    return boat ? (
      <div>     
        <h1>{boat.name}</h1>
        <img src={boat.photo} />
        <p>{boat.work_description}</p>
      </div>
    ) : (
      <div>Error: Boat doesn't exist</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        boats: state
    }
}

export default connect(mapStateToProps)(ShowBoat);
