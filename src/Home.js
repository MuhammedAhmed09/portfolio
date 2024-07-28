import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Container className='home'>
        <Row>
            <Col lg={7} sm={12}>
            <h5>hey, i'm muhammed</h5>
            <p className='once-paragraphe-home'><span>front</span>end developer</p>
            <p className='twice-paragraphe-home'> I'm a frontend developer based in Egypt. I'll help you build beautiful website your users will love.</p>
            <Link className='btn btn-contact' to="/ContactUs">get in touch</Link>
            <Link className='btn btn-about' to="/About">browse projcts</Link>
            </Col>
            <Col lg={5} sm={12}>
            <img src={require("./Image/IMG_6899.JPG")} alt='My-Photo' />
            </Col>
        </Row>
        </Container>
    )
}

export default Home
