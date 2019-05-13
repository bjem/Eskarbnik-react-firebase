import React, { Component } from 'react';
import ReactTable from "react-table";
import firebase from 'firebase/app';

import "react-table/react-table.css";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {

    firebase.firestore().collection('users').get().then((snapshot => {
      const data = [];

      snapshot.docs.forEach(doc => {
        // console.log(doc.data())
        const locker = {
          StudentFirst: doc.data().firstName,
          StudentLast: doc.data().lastName,
          Email: doc.data().email,
          StudentClass: doc.data().studentClass.value
        };
        data.push(locker);
      });
      this.setState(prevState => {
        return { data: [...prevState.data, ...data] };
      });
    }));
  }
  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "StudentFirst"
      },
      {
        Header: "Last Name",
        accessor: "StudentLast"
      },
      {
        Header: "Email",
        accessor: "Email"
      },
      {
        Header: "Class Name",
        accessor: "StudentClass"
      }
    ];

    return (
      <div className="col-md-8 col-md-offset-2">
        <ReactTable data={this.state.data} columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Students;