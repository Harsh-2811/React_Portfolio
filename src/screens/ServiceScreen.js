import React from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Services from '../components/Services';
import SecondaryPoster from '../components/SecondaryPoster'
const ServiceScreen = (props)=>{
   
    const services_list = [
        {
            "title":"Web Developement",
            "desc":"Get Fully Customized , reliable and Secure Web Applications for Business. Secured and Rapid APIS is Additional",
            "img":"/images/Web_Development.png"

        },
        {
            "title":"E-Commerce Solution",
            "desc":"Get Fully Customized , reliable and Secure Web Applications for Business. Secured and Rapid APIS is Additional",
            "img":"/images/ECommService.png"

        },
        {
            "title":"Web Designing",
            "desc":"Attractive and Responsive UI or Frontend are most neccessary for Website to attract Users to use websites.",
            "img":"/images/Web_Design.png"
            
        },
        {
            "title":"Mobile Applications",
            "desc":"We Develop Mobile Apps with proper code strucutre and Attractive UI by using Latest and Trending Technologies.",
            "img":"/images/MobileApps.png"
            
        },
        {
            "title":"Desktop Softwares",
            "desc":"Desktop Softwares are essential for all small stores and Buisness. I develop Desktop Softwares using Java and Java Swing Library with Better User Interface and Secure Backend",
            "img":"/images/Desktop.png"
            
        },

        {
            "title":"Databse Design",
            "desc":"Desktop Softwares are essential for all small stores and Buisness. I develop Desktop Softwares using Java and Java Swing Library with Better User Interface and Secure Backend",
            "img":"/images/Database.png"
            
        },
      
    ]

    return(
       <div className="service_main">
           <SecondaryPoster title={props.title}/>
            <section className="ftco-section ftco-services main-services">
    	<div className="overlay"></div>
    	<Container>
    		<Row className="row justify-content-center mb-5 pb-3">
          <Col md={7} className="heading-section ftco-animate text-center">
            <h2 className="my-4 service-title">My Services</h2>
            
          </Col>
        </Row>
    	
          
          <Services services_list= {services_list}/>
        
    	</Container>
    </section>
    
       </div>
    )
}
export default ServiceScreen;