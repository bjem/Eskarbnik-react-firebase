import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../actions/authActions';
import './Auth.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { value: '4a', label: '4a' },
    { value: '4b', label: '4b' },
    { value: '5a', label: '5a' },
    { value: '5b', label: '5b' },
    { value: '6a', label: '6a' },
    { value: '6b', label: '6b' }
    
  ];

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        studentClass: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    studentState = (studentClass) => {
        this.setState({
            studentClass
        });
        console.log(`Option selected:`, studentClass);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { studentClass } = this.state;
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="login">
                <div className="col-md-3 col-md-offset-4">
                    <div className="head">
                        <p>Sign Up to E-Skarbnik</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input id='firstName' onChange={this.handleChange} type="text" className="form-control" placeholder="First name" />
                            <label htmlFor="lastName">Last Name</label>
                            <input id='lastName' onChange={this.handleChange} type="text" className="form-control" placeholder="Last name" />
                            <label>Select Class Name</label>
                            <Select value={studentClass} onChange={this.studentState} options={options}/>

                            <label htmlFor="exampleInputEmail">Email address</label>
                            <input onChange={this.handleChange} type="email"
                                className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Password</label>
                            <input onChange={this.handleChange} type="password"
                            className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button className="btn btn-success col-sm-12">Sign Up</button>
                        <div className="red-text">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                        <p className="register">Do you have an account? <Link to="/">Sign In here!</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)