import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <Container className='projects'>
            <h1>my projects<span>.</span></h1>
            <Row className='up-projects'>
                <Col xs={12} md={4} className='border-project'>
                <img src={require("./Image/bandicam 2024-07-28 16-28-14-000.jpg")} alt='e-commerce'/>
                <Link className='link' to="https://to-do-list-psi-ecru.vercel.app/"><h3>Validation Form <span><MdOutlineArrowOutward /></span></h3></Link>
                <p>Validate plate form in bootstrap , React JS and CSS.</p>
                </Col>
                <Col xs={12} md={7} className='border-project'>
                <img src={require("./Image/bandicam 2024-07-28 16-25-07-883.jpg")} alt='e-commerce'/>
                <Link className='link' to="https://ecommerce-sigma-henna.vercel.app/"><h3>Fake api | eComerce <span><MdOutlineArrowOutward /></span></h3></Link>
                <p>E-commerce plate form in bootstrap , React JS , Fake Api and CSS.</p>
                <br></br>
                </Col>
            </Row>
            <Row className='up-projects'>
                <Col xs={12} md={7} className='border-project'>
                <img src={require("./Image/bandicam 2024-07-28 16-22-03-882.jpg")} alt='e-commerce'/>
                <Link className='link' to="https://shop-with-bootstrap.vercel.app/"><h3>Time Zone | eComerce <span><MdOutlineArrowOutward /></span></h3></Link>
                <p>E-commerce plate form in bootstrap , Javascript and CSS.</p>
                <br></br>
                </Col>
                <Col xs={12} md={4} className='border-project'>
                <img src={require("./Image/bandicam 2024-07-28 16-31-55-245.jpg")} alt='e-commerce'/>
                <Link className='link' to="https://to-do-list-psi-ecru.vercel.app/"><h3>To Do List <span><MdOutlineArrowOutward /></span></h3></Link>
                <p>To do list plate form in bootstrap , React JS and CSS.</p>
                </Col>
            </Row>



            
        
        </Container>
    )
}

export default Projects
