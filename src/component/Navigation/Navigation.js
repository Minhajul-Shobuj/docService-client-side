import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Navigation = () => {
    const {user,logout}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>DocService</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/doctors'}>Doctors</Nav.Link>
                            <Nav.Link as={Link} to={'/tests'}>Tests</Nav.Link>
                            {user?.email && 
                            <Nav.Link as={Link} to={'/dashboard'}>Dashboard</Nav.Link>}
                            <NavDropdown title="Account" id="collasible-nav-dropdown">
                            {user?.email ?
                                <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
                                : <div>
                                <NavDropdown.Item as={Link} to={'/register'} >Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={'/login'}>Login</NavDropdown.Item>
                                </div>}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <small className='text-danger'>{user.displayName}</small>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;