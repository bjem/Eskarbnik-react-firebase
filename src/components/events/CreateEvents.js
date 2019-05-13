import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createEvent } from './../actions/eventActions';
import Calendar from 'react-calendar';

class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      cost: '',
      date: new Date()
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value.substr(0,50)
    })
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
    this.setState({
      title: '',
      description: '',
      cost: ''
    });
  }

  onChange = date => this.setState({ date })

  render() {
    return (
<form onSubmit={this.handleSubmit}>
<div className="col-sm-6">
  <div className="form-group">
      <label htmlFor="title">Event Name</label>
      <input onChange={this.handleChange} value={this.state.title} id="title" type="text" placeholder="Name for event" className="form-control" required />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea onChange={this.handleChange} value={this.state.description} className="form-control" id="description" rows="4"></textarea>
  </div>
  <FormGroup>
    <label htmlFor="cost">Cost</label>
    <InputGroup>
      <InputGroup.Addon>PLN</InputGroup.Addon>
      <FormControl type="text" pattern="[0-9]*" id="cost" onChange={this.handleChange} value={this.state.cost} required />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>
  </div>
  <div className="col-sm-6">
  <label htmlFor="description">Select Date</label>
    <Calendar onChange={this.onChange} value={this.state.date} />
    <button className="btn btn-primary col-sm-4">Create event</button>
  </div>
</form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (newEvent) => dispatch(createEvent(newEvent))
  }
}

export default connect(null, mapDispatchToProps) (CreateEvents)