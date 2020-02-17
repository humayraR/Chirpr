import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import {
    Link 
} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/profile">My Profile</Link>
            </Nav>
            </Navbar>
        </>
    )
}

export default Navigation