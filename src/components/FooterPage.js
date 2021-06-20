import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';

const FooterPage = ()=>{
    return(
        <section className="footer-section  ">
          <Container>
          <footer>
                <Row>
                   
                    <Col lg={4} md={4} sm={12} className=" my-3"> 
                            <h3 style={{"color":"#fac654","textAlign":"center"}}>About Us</h3>
                            <p>
                                Welcome to SSV INFOTECH. SSV Infotech is the growing IT Startup for the best services in IT World.
                            </p>
                            <ul className="services-list" style={{"textAlign":'left'}}>
                                <li style={{"color":"#fac654"}}><i class="fas fa-check-circle" ></i> &nbsp; Sparkle</li>
                                <li style={{"color":"#fac654"}}><i class="fas fa-check-circle"></i> &nbsp;Sincerity</li>
                                <li style={{"color":"#fac654"}}><i class="fas fa-check-circle"></i> &nbsp; Vanguard</li>
                                
                             </ul>



                    </Col>
                    <Col lg={4} md={4} sm={12} className=" my-3"> 
                            <h3 style={{"color":"#fac654","textAlign":"center"}}>Services</h3>
                            <ul className="services-list">
                                <li>Web Development</li>
                                <li>Web Designing</li>

                                <li>Desktop Softwares</li>

                                <li>E-Commerce Solutions</li>
                                <li>Machine Learning & AI</li>
                               



                            </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12} className=" my-3"> 
                            <h3 style={{"color":"#fac654","textAlign":"center"}}>Contact US</h3>
                            <ul className="services-list">
                                
                                <li><i className="fas fa-envelope"></i>  info@ssvinfotech.in </li>
                                <li><i className="fas fa-map"></i>  Surat Gujarat India </li>


                            </ul>

                            <div className="d-flex justify-content-center">
                                <ul class="social-network social-circle">
                                <li><a href="https://www.facebook.com/harshpatel.patel.35175/" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/harsh-patel-b7793115b/" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" className="icoWhatsapp" title="Whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href="#" className="icoInstageam" title="Instagram"><i className="fab fa-instagram"></i></a></li>


                                </ul>	
                            </div>			
                    </Col>
                </Row>
            </footer>
          </Container>
        </section>
    )
}

export default FooterPage