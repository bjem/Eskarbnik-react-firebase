import React from 'react';
import { connect } from 'react-redux';
import './Event.css';
import { Link } from 'react-router-dom';
import moment from 'moment'

const EventList = ({events, deleteEvent, auth}) => {
    return (
        <tbody>
                    { events && events.map(event =>{
                return (
                    <tr key={event.id}>
                        <td>{event.title}</td>
                        <td>{moment(event.date.toDate()).calendar()}</td>
                        <td>{event.description}</td>
                        <td>{event.authorFirstName} {event.authorLastName} {"("}{event.studentClass}{")"}</td>
                        <td>{event.cost} zl</td>
                        <td>
                        {auth.uid === event.authorId &&
                        <div>
                        <button onClick={() => {deleteEvent(event.id)}} className="btn btn-danger pull-right">Delete</button>
                        <Link to={`/edit/${event.id}`} className="btn btn-success btn-space pull-right">Edit</Link>
                        </div>
                        }
                        </td>
                    </tr>
                    
                )
            })}
        </tbody>
      

    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps) (EventList);