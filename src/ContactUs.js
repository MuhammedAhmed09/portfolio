import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactUs = () => {    
    return (
        <>
        <Container className='contact'>
            <Row>
                <Col md={6} lg={6} xs={12} className='contact-margin-col-img'>
                    <img src={require("./Image/my_photo2.jpg")} alt='My-Photo' />
                </Col>
                
                <Col lg={6} xs={12} md={6}>
                <h1>get in touch<span>.</span></h1>

                <p className='main-paragraph'>Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                    <div className='contact-in'>
                        <p><FaInstagram /></p>
                        <Link className='btn' to="https://www.instagram.com/ba7r___._/"><h6>instagram <span><MdOutlineArrowOutward /></span></h6></Link>
                    </div>
                    <div className='contact-in'>
                        <p><FaLinkedinIn /></p>
                        <Link className='btn' to="https://www.linkedin.com/in/muhammad-a-ragab-a29078307/"><h6>linkedin <span><MdOutlineArrowOutward /></span></h6></Link>
                    </div>
                    <div className='contact-in'>
                        <p><FaPhoneAlt /></p>
                        <b>+20 1097182681</b>
                    </div>
                
                </Col>

            </Row>
            
        </Container>
        </>
    );
    }

export default ContactUs
