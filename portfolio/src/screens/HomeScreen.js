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
               <div className="aboutDiv p-3 my-2" id="aboutme">
                    <div className="my-3 p-3">
                        <h2 className="text-center aboutus-title">About Me</h2>
                    </div>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                           <div className="p-2">
                                <img src="/images/Developer.png" width="100%"/>
                           </div>
                        </Col>

                        <Col lg={8} md={8} sm={12}>
                            <div className="p-2 pt-1">
                                <h3 style={{"color":"#18bc9c","text-align":"center"}}>Full stack Web Developer</h3>
                                
                                <p className="my-3" style={{"font-size":"1.2rem"}}>
                                    I'm a Django + React Full-stack Web Developer along with a great academic career in Computer Engineering. Having a great skill in Web Development using Python, Django, and Flask Frameworks. Also, expertise in APIs Development using Django Rest Framework with React JS Frontend of Website.
                                    Desktop Software Development using Java and Swing is also my great skill.                       
                                </p>
                                <p className="my-3" style={{"font-size":"1.2rem"}}>
                                Develop Projects and systems according to client requirements and satisfaction. Client satisfaction is our main goal. Also Proper response after project Delivery.
                                </p>
                                <span style={{"textAlign":"center !important","color":"rgb(24, 188, 156)","fontWeight":"bold"}}><i className="fas fa-star"></i>Available For Freelancing</span>
                                <br/>
                                <Button variant="outline-primary mt-3"><a href="/Harsh_Resume_new.pdf" style={{"textDecoration":"none"}} download>Download CV</a></Button>{' '}
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
                </ScrollAnimation>



               <section className="mt-3 " id="certificates" style={{"backgroundImage":"url('/images/svg.png')"}}>
                   <Container>
                       
                   <Certificates certi_list={certi_list}/>
                   </Container>
                   
               </section>
            </div>
      
    )
}

export default HomeScreen;