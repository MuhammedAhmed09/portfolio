import React from 'react'
import './Contact.css';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "708bc748-2ea4-40c1-afd8-dd7d6e3104d8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            event.target.reset();
        }
    };



    return (
        <div className='all-contact'>
            <form onSubmit={onSubmit}>
                
                <Row className='name'>
                    <Col lg={6} md={6} sm={12}>
                        <h6>first name</h6>
                        <input name='firstName' type='text'/>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h6>last name</h6>
                        <input name='lastName' type='text'/>
                    </Col>
                </Row>
                
                <Row className='email'>
                    <Col>
                        <h6>email address</h6>
                        <input name='email' type='text' required/>
                    </Col>
                </Row>

                <Row className='message'>
                    <h6>message</h6>
                    <Col>
                    <textarea  name='message' required/>
                    </Col>
                </Row>

                <Row className='submit'>
                    <Col>
                    <input type='submit' />
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default ContactUs
