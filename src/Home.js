import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-scroll';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Element } from 'react-scroll'
import ContactUs from './contactUs/Contact';

const Home = () => { 
    return (
        <>

        <Element name='/'>
            <Container className='home'>
                <Row>
                    <Col lg={7} sm={12}>
                        <h5>hey, i'm muhammed</h5>
                        <p className='once-paragraphe-home'><span>front</span>end developer</p>
                        <p className='twice-paragraphe-home'> I'm a frontend developer based in Egypt. I'll help you build beautiful website your users will love.</p>
                        <Link className='btn btn-contact' smooth={true} duration={100} to="ContactUs">get in touch</Link>
                        <Link className='btn btn-about'  to="Projects" smooth={true} duration={500}>browse projcts</Link>
                    </Col>
                    <Col lg={5} sm={10}>
                        <img src={require("./Image/IMG_6899.JPG")} alt='My-Photo' />
                    </Col>
                </Row>
            </Container>
        </Element>

        <Element name='About'>
            <Container className='about'>
                <div>
                    <h1>about me</h1>
                    <h5>Who I am ? I'm Muhammed Ahmed . I'm from Egypt / El-Beheara / Kafr-Eldawar. I'm interested in Coding , Traveling and Languages.</h5> 
                    <div className='skills'>
                            <h2>my skills<span>.</span></h2>
                            <Row>
                                <li className='btn'>HTML</li>
                                <li className='btn'>JavaScript</li>
                                <li className='btn'>React JS</li>
                            </Row>
                            <Row>
                                <li className='btn'>CSS</li>
                                <li className='btn'>Bootstrap</li>
                            </Row>
                    </div>
                    
                </div>
            </Container>
        </Element>

            <Element name='Projects'>
                <Container className='projects'>
                    <h1>my projects<span>.</span></h1>
                    <Row className='up-projects'>
                        <Col xs={12} md={4} className='border-project'>
                            <img src={require("./Image/bandicam 2024-07-28 16-28-14-000.jpg")} alt='e-commerce'/>
                            <Link className='link' to="https://validation-form-tan.vercel.app/"><h3>Form Validate<span><MdOutlineArrowOutward /></span></h3></Link>
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
            </Element>

            <Element name='ContactUs'>
                <Container className='contact'>
                    <Row>
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
                        <Col md={6} lg={6} xs={12}>
                        <h1>contact us<span>.</span></h1>
                        <ContactUs />
                        </Col>
                    </Row>
                </Container>
                <footer>
                    <div className='copyRight'><p>Copyright &copy; 2023 All right reservd | This template is made by <span>Eng/ Muhammed Ahmed</span></p></div>
                </footer>
            </Element>
            
            </>
    )
}

export default Home
