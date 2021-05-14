import React from 'react';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { HashLink as LinkBook } from 'react-router-hash-link';
import {useLocation} from 'react-router-dom'
import '../style/Header.css'
const Header = ()=>{
    const location = useLocation();
    console.log(location.pathname)
    return(
        <div>
           <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
              <Container>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    
                    <Nav  activeKey={location.pathname}>
                            <LinkContainer exact to='/'>
                                <Nav.Link className="animate_link " ><i className="fas fa-home pr-1"></i> Home</Nav.Link>
                            </LinkContainer>
                            <LinkBook to='/#aboutme' className="animate_link nav-link">
                            <i className="fas fa-info pr-2"></i>  About me
                            </LinkBook>
                            <LinkContainer exact to='/services'>
                                <Nav.Link className="animate_link"><i className="fas fa-server pr-2"></i>  Services</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer exact to='/projects'>
                                <Nav.Link className="animate_link"><i className="fas fa-briefcase pr-2"></i> Projects</Nav.Link>
                                </LinkContainer>
                            <LinkBook smooth  to='/#certificates' className="animate_link nav-link">
                                <i className="fas fa-certificate pr-2"></i>  Certificates
                            </LinkBook>
                            <LinkContainer exact to='/contacts'>
                            <Nav.Link className="animate_link"><i className="fas fa-envelope pr-2 "></i> Contact Me</Nav.Link>

                            </LinkContainer>
                    </Nav>         

                               
                </Navbar.Collapse>
              </Container>
                </Navbar>
        </div>
    )
}
export default Header;