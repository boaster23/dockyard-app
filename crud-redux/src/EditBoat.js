import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Datetime from 'react-datetime';
import Moment from 'react-moment';
import moment from 'moment';
import WorkerSearch from './WorkerSearch';
import DatePicker from 'react-date-picker';

import 'react-datepicker/dist/react-datepicker.css';


class EditBoat extends Component {
constructor (props) {
    super(props)
    this.state = {
      arrival_date: moment(),
      delivery_date: moment()
    };
    this.handleChangeArrival = this.handleChangeArrival.bind(this);
    this.handleChangeDelivery = this.handleChangeDelivery.bind(this);
}
 
handleChangeArrival(date) {
    this.props.boat.arrival_date=date
}

handleChangeDelivery(date) {
    this.props.boat.delivery_date=date
}


handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newType = this.getType.value;
  const newPhoto = this.getPhoto.value;
  const newLength = this.getLength.value;
  const newWorkDescription = this.getWorkDescription.value;
  const newArrivalDate = this.getArrivalDate.value;
  const newDeliveryDate = this.getDeliveryDate.value;
  const newStatus = this.getStatus.value;
  const data = {
    newName,
    newType,
    newPhoto,
    newLength,
    newWorkDescription,
    newArrivalDate,
    newDeliveryDate,
    newStatus
  }

 
  this.props.dispatch({ type: 'UPDATE', id: this.props.boat.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}> 
    <h1>Edit {this.props.boat.name}</h1>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.boat.name} placeholder="Enter Boat Name" /><br /><br />
    <input required rows="5" ref={(input) => this.getType = input}
    defaultValue={this.props.boat.type} cols="28" placeholder="Enter Type" /><br /><br />
    <input required rows="5" ref={(input) => this.getPhoto = input}
    defaultValue={this.props.boat.photo} cols="28" placeholder="Enter Photo" /><br /><br />
    <input required rows="5" ref={(input) => this.getLength = input}
    defaultValue={this.props.boat.length} cols="28" placeholder="Enter Length" /><br /><br />
    <input required rows="5" ref={(input) => this.getArrivalDate = input}
    defaultValue={this.props.boat.arrival_date} cols="28" placeholder="Enter Arrival Date" /><br /><br />
    <input required rows="5" ref={(input) => this.getDeliveryDate = input}
    defaultValue={this.props.boat.delivery_date} cols="28" placeholder="Enter Delivery Date" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getWorkDescription = input}
    defaultValue={this.props.boat.work_description} cols="28" placeholder="Enter work description" /><br /><br />
    <input required rows="5" ref={(input) => this.getStatus = input}
    defaultValue={this.props.boat.status} cols="28" placeholder="Enter Status" /><br /><br />
    <button>Update</button><br /><br />
  </form>
</div>
);
}
}
export default connect()(EditBoat);
