import React ,{useState}from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import * as emailjs from 'emailjs-com'

const ContactForm = ()=>{
    const [name,setName] = useState("");
const [email,setEmail] = useState("");

const [subject,setSubject] = useState("");

const [message,setMessage] = useState("");

const sendInquiry = (e)=>{
    e.preventDefault()
    if(name == " ")
    {
        alert("Please Fill Your Name")
    }
    else if(email == " ")
    {
        alert("Please Fill Your Name")
    }
    else if(subject == " ")
    {
        alert("Please Fill Your Name")
    }
    else if(message == " ")
    {
        alert("Please Fill Your Name")
    }
    else{
        let templateParams = {
            from_name: email,
            to_name: 'harshpatel281199@gmail.com',
            subject: subject,
            message: message,
       }
       emailjs.send(
        'service_pfm4avx',
        'template_bu2qqcq',
         templateParams,
        'user_00FBXQES8XbhV1THedLJF'
        )        .then(function(response) {
            alert("Your Messages has been sent")
            setName("");
            setEmail("");
            setSubject("");
            setMessage("")
          }, function(error) {
            console.log('FAILED...', error);
          });
    }
}
    return(
        <div className="my-3 d-flex justify-content-center">
            <Col md={6}>
            <Form onSubmit={sendInquiry}>

<Form.Group controlId='name' className="my-1">
    <Form.Label>Name</Form.Label>
    <Form.Control
        required
        type='name'
        placeholder='Enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='email' className="my-1">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
        required
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='Subject' className="my-1">
    <Form.Label>Subject</Form.Label>
    <Form.Control
        required
        type='text'
        placeholder='Enter Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='Message' className="my-1">
    <Form.Label>Message</Form.Label>
    <Form.Control
        required
        as="textarea" rows={3}
        placeholder='Enter Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Button type='submit' className="mt-2 primary" variant='primary'>
    Send Message
</Button>

</Form>

            </Col>
       
        </div>
    )
}
export default ContactForm