import React, { Component } from 'react';
import {connect} from 'react-redux';


class BoatForm extends Component {
  handleSubmit = (e) => {
  e.preventDefault();
  const name = this.getName.value;
  const type = this.getType.value;
  const photo = this.getPhoto.value;
  const length = this.getLength.value;
  const work_description = this.getWorkDescription.value;
  const arrival_date = this.getArrivalDate.value;
  const delivery_date = this.getDeliveryDate.value;
  const status = this.getStatus.value;
  const data = {
    name,
    type,
    photo,
    length,
    work_description,
    arrival_date,
    delivery_date,
    status
  }
    this.props.dispatch({
    type:'ADD_BOAT',
    data});

    this.getName.value = '';
    this.getType.value = '';
    this.getPhoto.value = '';
    this.getLength.value = '';
    this.getDeliveryDate.value = '';
    this.getArrivalDate.value = '';
    this.getWorkDescription.value = '';
    this.getStatus.value = '';
    
    this.props.allboats()

  }
render() {
return (
<div>
  <h1>Create Boat</h1>
  <form onSubmit={this.handleSubmit}>
    
    <input required type="text" ref={(input) => this.getName = input}
     placeholder="Enter Boat Name" /><br /><br />
    <input required rows="5" ref={(input) => this.getType = input}
     cols="28" placeholder="Enter Type" /><br /><br />
    <input required rows="5" ref={(input) => this.getPhoto = input}
     cols="28" placeholder="Enter Photo" /><br /><br />
    <input required rows="5" ref={(input) => this.getLength = input}
     cols="28" placeholder="Enter Length" /><br /><br />
    <input required rows="5" ref={(input) => this.getDeliveryDate = input}
     cols="28" placeholder="Enter delivery date" /><br /><br />

    <input required rows="5" ref={(input) => this.getArrivalDate = input}
     cols="28" placeholder="Enter Arrival Date" /><br /><br />

    <textarea required rows="5" ref={(input) => this.getWorkDescription = input}
     cols="28" placeholder="Enter work description" /><br /><br />
    <input required rows="5" ref={(input) => this.getStatus = input}
     cols="28" placeholder="Enter Status" /><br /><br />
    <button>Submit</button>
  </form>
</div>
);
}
}
export default connect()(BoatForm);
