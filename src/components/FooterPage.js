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
                            <p style={{'fontSize':'1rem','letterSpacing':'0.1rem'}}>
                            <span style={{"color":"#fac654"}}>Welcome to SSV INFOTECH.</span> SSV Infotech is the growing IT Startup for the best services of Web Development, Web Designing, Mobile Applications, E-Commerce Solutions, Machine Learning, and AI
                                    
                            </p>
                            <p style={{'color':'#fac654'}}>
                            <i class="fas fa-check-circle" ></i> &nbsp; Sparkle &nbsp; <i class="fas fa-check-circle"></i> &nbsp;Sincerity &nbsp; <i class="fas fa-check-circle"></i> &nbsp; Vanguard
                                </p>
                           



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
                                <li><i class="fas fa-map-marker-alt"></i>  Surat Gujarat India </li>


                            </ul>

                            <div className="d-flex justify-content-center">
                                <ul class="social-network social-circle">
                                <li><a href="https://www.facebook.com/profile.php?id=100069771338478" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                {/* <li><a href="https://www.linkedin.com/in/harsh-patel-b7793115b/" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" className="icoWhatsapp" title="Whatsapp"><i className="fab fa-whatsapp"></i></a></li>*/
                                <li><a href="https://www.instagram.com/ssvinfotech/" className="icoInstageam" title="Instagram"><i className="fab fa-instagram"></i></a></li> }


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