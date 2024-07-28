import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
        <Navbar expand="lg" className="navbar">
        <Container>
                <NavbarBrand  style={{fontWeight: '700', color: '#34738d'}}>MUHAMMED | | BA7R</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/About">About</Link>
                <Link className='link' to="/ContactUs">Contact Us</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
