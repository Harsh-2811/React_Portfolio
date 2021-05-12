import React,{useState} from 'react'
import Poster from '../components/Poster';
import { Container,Row,Col } from 'react-bootstrap';
import swal from 'sweetalert';
import ContactForm from '../components/ContactForm';
const ContactScreen = (props)=>{
    const {title } = props
    const [message, setMessage] = useState('')
    

    const makeMessage = (data)=>{
        setMessage(data)
        if(data.variant == "success"){
            swal("Success!", data.msg, data.variant);
        }
        else{
            swal("Oops!", data.msg, data.variant);
        }
    };
    return(
        <div>
                <Poster title={title}/>
                <Container>
                <Col md={6} className="d-flex justify-content-center py-3 ">
                
                </Col>
                <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 project-title" style={{"color":"#18bc9c"}}>{title}</h2>
                    
                </Col>
                </Row>
                <ContactForm makeMessage={makeMessage}/>
                </Container>
        </div>
    )
}
export default ContactScreen