import React,{useEffect,useState} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { HashLink as LinkBook } from 'react-router-hash-link';
import {useLocation} from 'react-router-dom'
import '../style/Header.css'
const Header = ()=>{
    const location = useLocation();
    const [navClass,setNavClass] = useState('mynav')
    const [toogleClassName,settoogleClassName] = useState(' ')

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const mynav = window.scrollY < 100 ? "mynav" : "mynav1";
            const toogleClass = window.scrollY < 100 ? " " : "blacktoggle";


      
            setNavClass(mynav)
            settoogleClassName(toogleClass)
          });
    },[])
    return(
        <div>


           <Navbar bg="" className={navClass} variant="dark" expand="lg" collapseOnSelect fixed="top">
              <Container>
              <Navbar.Brand href="/" ><img src="/images/Logo2.png" width="70%" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={toogleClassName} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    
                    <Nav  activeKey={location.pathname} className="ml-auto">
                            <LinkContainer exact to='/'>
                                <Nav.Link className="animate_link " ><i className="fas fa-home pr-2"></i>&nbsp; Home</Nav.Link>
                            </LinkContainer>
                            <LinkBook to='/#aboutme' className="animate_link nav-link">
                            <i className="fas fa-info pr-2"></i>&nbsp; About Us
                            </LinkBook>
                            <LinkContainer exact to='/services'>
                                <Nav.Link className="animate_link"><i className="fas fa-server pr-2"></i>&nbsp; Services</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer exact to='/projects'>
                                <Nav.Link className="animate_link"><i className="fas fa-briefcase pr-2"></i>&nbsp; Projects</Nav.Link>
                                </LinkContainer>
                            <LinkBook smooth  to='/#section-technologies' className="animate_link nav-link">
                                <i className="fas fa-code pr-2"></i>&nbsp; Technologies
                            </LinkBook>
                            <LinkBook to='/#contacts' className="animate_link nav-link">
                            <i className="fas fa-envelope pr-2 "></i>&nbsp; Contact Us

                            </LinkBook>
                    </Nav>         

                               
                </Navbar.Collapse>
              </Container>
                </Navbar>
        </div>
    )
}
export default Header;