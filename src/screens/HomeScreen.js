import React from 'react'
import Poster from '../components/Poster';
import Services from '../components/Services';
import ScrollAnimation from 'react-animate-on-scroll'
import {Container,Row,Col,Button} from 'react-bootstrap'
import '../style/main.css'
import Certificates from '../components/Certificates';

const HomeScreen = (props)=>{

    const certi_list = [
        "/images/Django.jpg",
        "/images/React.jpg",
        "/images/Django_React.jpg",
        "/images/Python.jpg",
        "/images/ML.jpg",

    ]
    return(    
            <div>
                <Poster title={props.title}/>
                <ScrollAnimation animateIn='fadeIn'>
               <Container>
               <div className="aboutDiv p-3 my-2" id="aboutme" style={{'backgroundColor':'#10375d','borderRadius':'1%'}}>
                    <div className="my-3 p-3">
                        <h2 className="text-center aboutus-title" style={{'color':'#fff'}}>About Us</h2>
                    </div>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                           <div className="p-2">
                                <img src="/images/AboutUs.png" width="100%"/>
                           </div>
                        </Col>

                        <Col lg={8} md={8} sm={12}>
                            <div className="p-2 pt-1">
                                <h3 style={{"color":"#fac654","textAlign":"center",'fontSize':'1.5rem'}}><span style={{'textTransform':'capitalize '}}><i class="fas fa-check-circle"></i> Sparkle &nbsp;</span> <i class="fas fa-check-circle"></i> Sincerity &nbsp; <i class="fas fa-check-circle"></i> Vanguard</h3>
                                <ul className="aboutlist">
                                    <li>
                                    We <span style={{"color":"#fac654"}}>SSV INFOTECH</span> are a growing IT Solution Startup. We provide Modern and Effective IT Solutions for Modern Businesses and Companies. Today in the developing IT world we use modern and latest technologies to build solutions with high security and better performance.
                                    </li>
                                    <li>
                                    We provide excellent services in Web Development & Designing, Mobile Apps Development, Desktop Software Development, and Database Architecture. Appropriate Testing, Debugging, and Deployment on the Production level.
                                    </li>

                                    <li>
                                    Our solutions are speedy, secured, reliable, customized and many more which follows client's need. We Deliver products and Services on Time.
                                    </li>
                        
                                </ul>
                               
                                
                                <br/>
                                
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
                </ScrollAnimation>



                <section className="section-technologies" id="section-technologies">
            <Container>
                    <Row className="row justify-content-center pb-3">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 tech-title" style={{"color":"#10375d"}}>Technologies</h2>
                    
                </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} sm={12} className="p-2">
                        <img src="/images/languages.png"/>
                    </Col>
                    <Col md={6} lg={6} sm={12} className="p-2">
                        <img src="/images/databases.png"/>
                    </Col>
                </Row>
            </Container>
    </section>
            </div>
      
    )
}

export default HomeScreen;