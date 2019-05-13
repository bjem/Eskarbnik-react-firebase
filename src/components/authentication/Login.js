import React, {Component} from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

class Login extends Component {
        state = {
            email:'',
            password:''
        }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props;
        return (
            <div className="login">
            <div className="col-md-3 col-md-offset-4">
                <div className="head">
                    <p>Sign In to E-Skarbnik</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                        className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password"
                        name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button className="btn btn-success col-sm-12">Sign In</button>
                    <div className="red-text">
                        { authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
            <div className="col-md-3 col-md-offset-4">
                <p className="register">New to E-Skarbnik? <Link to="/register">Create account!</Link></p>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);