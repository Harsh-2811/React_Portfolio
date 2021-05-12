import React from 'react'
import Poster from '../components/Poster';
import { Container,Row,Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
const ContactScreen = (props)=>{
    const {title } = props
    return(
        <div>
                <Poster title={title}/>
                <Container>
                <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 project-title" style={{"color":"#18bc9c"}}>{title}</h2>
                    
                </Col>
                </Row>
                <ContactForm/>
                </Container>
        </div>
    )
}
export default ContactScreen