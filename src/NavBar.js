import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'


const NavBar = () => {
    
    return (
        <>
        <Navbar expand="lg" className="navbar">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav ">
                <Link  className='link' to="/" smooth={true} duration={100}>Home</Link>
                <Link className='link' to="About" smooth={true} duration={500}>About</Link>
                <Link className='link' to="Projects" smooth={true} duration={500}>Projects</Link>
                <Link className='link' to="ContactUs" smooth={true} duration={500}>Contact Me</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
