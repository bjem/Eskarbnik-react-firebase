import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';

const Header = (props) => {
    const { profile } = props;
    return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/home">E-Skrabnik</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
                        Home
                    </NavItem>
                    <NavItem eventKey={1} componentClass={Link} href="/classes" to="/classes">
                        Your School
                    </NavItem>
                    <NavDropdown eventKey={3} title="Events" id="nav-dropdown">
                        <MenuItem eventKey={3.1} componentClass={Link} href="/create_event" to="/create_event">Create Event</MenuItem>
                        <MenuItem eventKey={3.2} componentClass={Link} href="/events" to="/events">List of Events</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} componentClass={Link} href="/students" to="/students">
                        Students
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem disabled>
                    You are logged as {profile.firstName} {profile.lastName} | 
                    </NavItem>
                    <NavItem onClick={props.signOut} componentClass={Link} href="/" to="/">
                        Logout
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapSateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Header);