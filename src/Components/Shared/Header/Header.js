import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

import { Link } from 'react-router-dom';

const Header = () => {
    const [user]=useAuthState(auth)
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      
                     
                       
                    </Nav>
                    <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            
{/*                            
                            {
                                user && <>
                                      
                                      <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                                      <Nav.Link as={Link} to="/newitem">Add Item</Nav.Link>
                                      <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            } */}
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to='login'>
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )};

export default Header;