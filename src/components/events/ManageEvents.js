import React, { Component } from 'react';
import EventList from './EventList';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase/app';

class ManageEvents extends Component {

  deleteEvent(id) {
    firebase.firestore().collection('events').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
        const { events } = this.props;
    return (
        <div className="container">
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Owner</th>
      <th scope="col">Cost</th>
    </tr>
  </thead>
    <EventList events={events} deleteEvent={this.deleteEvent}/>
</table>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events
  }
}

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
      {collection: 'events', orderBy: ['createdAt', 'desc'] }
  ])
)(ManageEvents)