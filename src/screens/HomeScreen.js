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
    
    const Abstract_Services = [
        {
            "title":"Web Development",
            "image":"/images/Abstract_Develop.png",
            
        },
        {
            "title":"Web Designing",
            "image":"/images/Abstract_Design.png",
            
        },
        {
            "title":"Mobile Applications",
            "image":"/images/Abstract_Mobile.png",
            
        },
        {
            "title":"Desktop Softwares",
            "image":"/images/Abstract_Software.png",
            
        },
        {
            "title":"E-Commerce Website",
            "image":"/images/Abstract_Comm.png",
            
        },
        {
            "title":"Database and Servers",
            "image":"/images/Abstarct_Database.png",
            
        },
        {
            "title":"Machine Learning & AI",
            "image":"/images/Abstarct_ML.png",
            
        },
        {
            "title":"BlockChain and Crypto",
            "image":"/images/Abstract_BC.png",
            
        },

    ]

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
            <>
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
                
           
            
    </section>

    <section class="service-section section-gap p-3 mt-3">
        <div class="container">
            <div class="section-title text-center mb-30">
            <h2 className="my-4 project-title" style={{"color":"#10375d","textAlign":'center'}}>Our Services</h2>
            </div>
            <div class="row service-items">
                {
                    Abstract_Services.map((item,index)=>{
                        return(
                            <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp mt-3"  data-wow-delay="0.3s" >
                    <div class="service-item color-2 text-center mt-30 " style={{"box-shaddow":" 5px 10px #fac654"}} >
                        <div class="icon">
                            <img width="100%" src={item.image} />
                        </div>
                        <h5 class="title"><a href="service-details.html">{item.title}</a></h5>
                        
                    </div>
                </div>
                        )
                    })
                }
             
            </div>
        </div>
    </section>

    <section className="contact-section  p-3" id="contacts">
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
    
            </>
      
    )
}

export default HomeScreen;