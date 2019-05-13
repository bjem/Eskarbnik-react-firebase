import React, { Component } from 'react';
import firebase from 'firebase/app';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import Calendar from 'react-calendar';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      cost: '',
      date: new Date()
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('events').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const evnt = doc.data();
        this.setState({
          key: doc.id,
          title: evnt.title,
          description: evnt.description,
          cost: evnt.cost,
          authorFirstName:  evnt.authorFirstName,
          authorId: evnt.authorId,
          authorLastName: evnt.authorLastName,
          createdAt: evnt.createdAt,
          studentClass: evnt.studentClass
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.id] = e.target.value;
    this.setState({evnt:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, cost, date, authorFirstName, authorId, authorLastName, createdAt, studentClass } = this.state;

    const updateRef = firebase.firestore().collection('events').doc(this.state.key);
    updateRef.set({
      title,
      description,
      cost,
      date,
      authorFirstName,
      authorId,
      authorLastName,
      createdAt,
      studentClass,
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        cost: ''
      });
      this.props.history.push("/events")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  handleChange = date => this.setState({ date })

  render() {
    // const { studentClass } = this.state;

    return (
<form onSubmit={this.onSubmit}>
<div className="col-sm-6">
  <div className="form-group">
      <label htmlFor="title">Event Name</label>
      <input onChange={this.onChange} value={this.state.title} id="title" type="text" placeholder="Name for event" className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea onChange={this.onChange} value={this.state.description} className="form-control" id="description" rows="4"></textarea>
  </div>
  <FormGroup>
    <label htmlFor="cost">Cost</label>
    <InputGroup>
      <InputGroup.Addon>PLN</InputGroup.Addon>
      <FormControl type="text" id="cost" onChange={this.onChange} value={this.state.cost} />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>
  </div>
  <div className="col-sm-6">
  <label htmlFor="description">Select Date</label>
    <Calendar onChange={this.handleChange} value={this.state.date} />
    <button className="btn btn-primary col-sm-4">Update</button>
  </div>
</form>
    )
  }
}

export default Edit;