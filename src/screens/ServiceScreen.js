import React,{useEffect} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Services from '../components/Services';
import {useLocation} from 'react-router-dom';
import SecondaryPoster from '../components/SecondaryPoster'
const ServiceScreen = (props)=>{
    const {pathname} = useLocation();
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
            "title":"Database Design",
            "desc":"Desktop Softwares are essential for all small stores and Buisness. I develop Desktop Softwares using Java and Java Swing Library with Better User Interface and Secure Backend",
            "img":"/images/Database.png"
            
        },
      
    ]
    const works_for =[
        {"title":'Finance','img':'/images/finance.png'},{"title":"Business","img":"/images/business.png"},
        {"title":'Education','img':'/images/Education.png'},{"title":'Health','img':'/images/Health.png'},
        {"title":'Shopping','img':'/images/market.png'},{"title":'Games','img':'/images/gamming.png'},
        {"title":'Logistic','img':'/images/logistic.png'},{"title":'Social Networking','img':'/images/social.png'}
    ]
    useEffect(()=>{
        
        window.scrollTo(0, 0);
    },[pathname])
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
        <section className="workfor mt-4 p-3">
        <Container>
        <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 project-title ">We Work For</h2>
                    
                    
                </Col>
                </Row>
            <Row>
            {
                works_for.map((item,index)=>{
                    return(
                        <Col sm={3} key={index} className="p-4">
                    <div className="card card-flip h-100">
                        <div className="card-front text-white" >
                            <div className="card-body d-flex justify-content-center align-itmes-center"  >
                                <img src={item.img} width="70%" />                           
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="card-body d-flex justify-content-center align-items-center" style={{'height':'100%'}}>
                                <h2 className="card-title" style={{'color':'#10375d','fontSize':'2.2rem'}}>{item.title}</h2>
                                
                            </div>
                        </div>
                    </div>

            </Col>
                    )
                })
            }
            </Row>
        </Container>
        </section>
       </div>
    )
}
export default ServiceScreen;