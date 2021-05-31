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


           <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect fixed="top">
              <Container>
              <Navbar.Brand href="/" style={{'fontSize':'1.5rem','color':'#fac654','letterSpacing':'0.1rem','fontWeight':'bold'}}>SSV INFOTECH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    
                    <Nav  activeKey={location.pathname} className="ml-auto">
                            <LinkContainer exact to='/'>
                                <Nav.Link className="animate_link " ><i className="fas fa-home pr-1"></i> Home</Nav.Link>
                            </LinkContainer>
                            <LinkBook to='/#aboutme' className="animate_link nav-link">
                            <i className="fas fa-info pr-2"></i>  About Us
                            </LinkBook>
                            <LinkContainer exact to='/services'>
                                <Nav.Link className="animate_link"><i className="fas fa-server pr-2"></i>  Services</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer exact to='/projects'>
                                <Nav.Link className="animate_link"><i className="fas fa-briefcase pr-2"></i> Projects</Nav.Link>
                                </LinkContainer>
                            <LinkBook smooth  to='/#section-technologies' className="animate_link nav-link">
                                <i className="fas fa-code pr-2"></i>  Technologies
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