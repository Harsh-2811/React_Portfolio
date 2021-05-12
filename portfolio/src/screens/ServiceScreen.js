import React from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Services from '../components/Services';
import Poster from '../components/Poster'
const ServiceScreen = (props)=>{
   
    const services_list = [
        {
            "title":"Web Developement and APIs",
            "desc":"Web Development using Python and it's best Framework Django (Full stack Framework) and Flask (MicroFramework). Secure and rapid API Development using Django Rest Framework.",
            "img":"/images/Web_Development.png"

        },
        {
            "title":"Web Designing",
            "desc":"I make Website Frontend using Bootstrap , HTML, CSS and Javascript or JQuery. Also use React JS Frontend Framework for single page Application with better UI.",
            "img":"/images/Web_Design.png"
            
        },
        {
            "title":"E Commerce Solutions",
            "desc":"Place Stores online and sell items via Website give more benefits. We use Shopify, WooCommerce and Django saleor for E-Commerce Development.",
            "img":"/images/EComm.png"
            
        },
        {
            "title":"Desktop Softwares",
            "desc":"Desktop Softwares are essential for all small stores and Buisness. I develop Desktop Softwares using Java and Java Swing Library with Better User Interface and Secure Backend",
            "img":"/images/Desktop.png"
            
        },
      
    ]

    return(
       <div className="service_main">
           <Poster title={props.title}/>
            <section className="ftco-section ftco-services" style={{"backgroundImage":'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/images/Service_background.png")'}}>
    	<div className="overlay"></div>
    	<Container>
    		<Row className="row justify-content-center mb-5 pb-3">
          <Col md={7} className="heading-section ftco-animate text-center">
            <h2 className="my-4 service-title" style={{"color":"#18bc9c"}}>My Services</h2>
            <p  style={{"color":"#fff"}}>I will provide you the best service in this compititive area of ​​the IT industry in following ...</p>
          </Col>
        </Row>
    	
          
          <Services services_list= {services_list}/>
        
    	</Container>
    </section>
    <section className="section-technologies">
            <Container>
                    <Row className="row justify-content-center pb-3">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 tech-title" style={{"color":"#18bc9c"}}>Technologies</h2>
                    
                </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} sm={12} className="p-2">
                        <img src="/images/languages.png"/>
                    </Col>
                    <Col md={6} lg={6} sm={12} className="p-2">
                        <img src="/images/Databases.png"/>
                    </Col>
                </Row>
            </Container>
    </section>
       </div>
    )
}
export default ServiceScreen;