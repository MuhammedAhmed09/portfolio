import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    
    return (
        <>
        <Navbar expand="lg" className="navbar">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav ">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/Projects">Projects</Link>
                <Link className='link' to="/ContactUs">Contact Me</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
