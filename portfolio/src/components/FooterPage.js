import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';

const FooterPage = ()=>{
    return(
        <section className="footer-section  ">
          <Container>
          <footer>
                <Row>
                    <Col lg={4} md={4} sm={12} className="p-2 my-3"> 
                            <h3 style={{"color":"#18bc9c","textAlign":"center"}}>Services</h3>
                            <ul className="services-list">
                                <li>Web Development</li>
                                <li>Web Designing</li>

                                <li>Deskto Softwares</li>

                                <li>E-Commerce Solutions</li>


                            </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="p-2 my-3"> 
                            <h3 style={{"color":"#18bc9c","textAlign":"center"}}>Social</h3>
                            <div className="d-flex justify-content-center">
                                <ul class="social-network social-circle">
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" className="icoWhatsapp" title="Whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href="#" className="icoInstageam" title="Instagram"><i className="fab fa-instagram"></i></a></li>


                                </ul>	
                            </div>			
                    </Col>
                    <Col lg={3} md={4} sm={12} className="p-2 my-3"> 
                            <h3 style={{"color":"#18bc9c","textAlign":"center"}}>Contact Me</h3>
                            <ul className="services-list">
                                <li><i className="fas fa-phone"></i>  +91 8849430206 </li>
                                <li><i className="fas fa-envelope"></i>  hrpatel8935@gmail.com </li>
                                <li><i className="fas fa-map"></i>  Surat Gujarat India </li>


                            </ul>
                    </Col>
                </Row>
            </footer>
          </Container>
        </section>
    )
}

export default FooterPage