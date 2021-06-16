import React,{useState,useEffect} from 'react'
import Poster from '../components/Poster';

import ContactForm from '../components/ContactForm';
import ScrollAnimation from 'react-animate-on-scroll'
import {Container,Row,Col,Button} from 'react-bootstrap'
import '../style/main.css';
import swal from 'sweetalert';
import CounterInput from 'react-bootstrap-counter';

const HomeScreen = (props)=>{
    
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
               <div className="aboutDiv p-3 my-2" id="aboutme" style={{'backgroundColor':'#10375d'}}>
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
                                <h3 style={{"color":"#fac654","textAlign":"center",'fontSize':'1.5rem'}}><span style={{'textTransform':'uppercase ','letterSpacing':'0.09rem'}}><i class="fas fa-check-circle"></i> Sparkle &nbsp;</span> <span style={{'textTransform':'uppercase ','letterSpacing':'0.09rem'}}><i class="fas fa-check-circle"></i> Sincerity </span> &nbsp; <span style={{'textTransform':'uppercase ','letterSpacing':'0.09rem'}}><i class="fas fa-check-circle"></i> Vanguard </span></h3>
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

                <section className="steps p-3">
                    
                    <Container>
                        <h2 className="my-3 tech-title text-center text-white">
                            How We Work
                        </h2>
                        <Row>
                            <Col sm={12} md={6} lg={6} className="pl-2">
                                <img src="/images/Process.png" width="80%"/>
                            </Col>
                            <Col>
                           <div className="stepper d-flex flex-column mt-5 ml-2">
                            <div className="d-flex mb-1">
                                <div className="d-flex flex-column pr-5 align-items-center ">
                                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                                    <div className="line h-100"></div>
                                </div>
                                <div style={{'marginLeft':'5%'}}>
                                    <h5 className="stpe-title">Infromation Gathering</h5>
                                    <p className="lead text-white pb-3">Discuss the project with the client and decide process flow</p>
                                </div>
                            </div>
                            <div className="d-flex mb-1">
                                <div className="d-flex flex-column pr-4 align-items-center">
                                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                                    <div className="line h-100"></div>
                                </div>
                                <div style={{'marginLeft':'5%'}}>
                                    <h5 className=" stpe-title">Prototype Design</h5>
                                    <p className="lead text-white pb-3">Model Design with flowcharts and Database Design Stage </p>
                                </div>
                            </div>
                            <div className="d-flex mb-1">
                                <div className="d-flex flex-column pr-4 align-items-center">
                                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                                    <div className="line h-100"></div>
                                </div>
                                <div style={{'marginLeft':'5%'}}>
                                    <h5 className="stpe-title">Project Development</h5>
                                    <p className="lead text-white pb-3">Develop and Code Project with Appropriate Technologies and Frameworks</p>
                                </div>
                            </div>

                            <div className="d-flex mb-1">
                                <div className="d-flex flex-column pr-4 align-items-center">
                                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">4</div>
                                    <div className="line h-100 "></div>
                                </div>
                                <div style={{'marginLeft':'5%'}}>
                                    <h5 className="stpe-title">Testing & Debugging</h5>
                                    <p className="lead text-white pb-3">Do Unit and Integrated Testing using Testing Softwares</p>
                                </div>
                            </div>
                            <div className="d-flex mb-1">
                                <div className="d-flex flex-column pr-4 align-items-center">
                                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">5</div>
                                    <div className="line h-100 d-none"></div>
                                </div>
                                <div style={{'marginLeft':'5%'}}>
                                    <h5 className="stpe-title">Deployment</h5>
                                    <p className="lead text-white pb-3">Deploy Project on Live Securly</p>
                                </div>
                            </div>

                            
                        </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section-technologies" id="section-technologies">
                
            <Container>
                <Row className="row justify-content-center mt-3">
                    <Col md={7} className="heading-section ftco-animate text-center">
                        <h2 className="mb-4 tech-title" style={{"color":"#10375d"}}>Technologies</h2>
                        
                    </Col>
                </Row>
               
                <div className="d-flex justify-content-center">
                    <img src="/images/Techs.png" className="img-fluid" width="50%"/>
                </div>
               </Container>
            
    </section>

    

    <section className="contact-section mt-3 p-3" id="contacts">
    <Container>
                
                <Row className=" ">
                <Col md={6} className=" ">
                    <img src="/images/ContactUs.png" />
                </Col>
                <Col md={6} className="heading-section ftco-animate">
                    <h2 className="my-4 project-title" style={{"color":"#10375d","textAlign":'center'}}>Contact Us</h2>
                    <ContactForm makeMessage={makeMessage}/>
                </Col>
                </Row>
                
                </Container>
    </section>
            </div>
      
    )
}

export default HomeScreen;