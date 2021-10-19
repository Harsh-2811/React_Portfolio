import React,{useEffect,useState} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavHashLink as LinkBook } from 'react-router-hash-link';
import {useLocation,useHistory,Link} from 'react-router-dom'
import '../style/Header.css'
const Header = ()=>{
    const location = useLocation();
    const [navClass,setNavClass] = useState('mynav')
   
    const history = useHistory();
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
       
        <div className="header fixed-top">
           
           <div className="top-header sm-mx-none bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-4">
                        <ul class="top-contact">
                            <li><a href="#" class="text-white"><i class="fas fa-phone mr-3" style={{'marginRight':'5px'}}></i> (+91) 8849430206</a></li>
                            <li><a href="#" class="text-white"><i class="fas fa-envelope mr-3" style={{'marginRight':'5px'}}></i> info@ssvinfotech.in</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-8">
                        
                            
                        <ul class="social-contact ml-auto">
                            <li style={{'margin-right':'0px !important'}}><a href="https://www.facebook.com/profile.php?id=100069771338478" class="text-white"><i class="fab fa-facebook-f" style={{'padding':'0px'}}></i> </a></li>
                            <li style={{'margin-right':'0px !important'}}><a href="https://www.instagram.com/ssvinfotech/" class="text-white"><i class="fab fa-instagram" style={{'padding':'0px'}}></i></a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
           <Navbar id="fullNav" bg="" className={navClass} variant="dark" expand="lg" collapseOnSelect style={{"backgroundColor":"#ffffff !important"}}>
              <Container>
                
                    <Navbar.Brand href="/" ><img src="/images/Logo2.png" width="70%"  className="logo" /></Navbar.Brand>
                    
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleBtn" className={`${toogleClassName} toggleBtn`} />
                   
                <Navbar.Collapse id="basic-navbar-nav" >
                
                    <Nav  activeKey={location.pathname} className="ml-auto ssv-nav">
                            
                                <Link 
                                
                                className={`${location.pathname}${location.hash}` === 
                                "/" ? "active animate_link nav-link" : "animate_link nav-link "}
                                 exact to='/' onClick={
                                    ()=>{
                                        window.scrollTo({
                                            top: 0, 
                                            behavior: 'smooth'
                                            /* you can also use 'auto' behaviour
                                               in place of 'smooth' */
                                          });
                                    }
                                }  
                                
                                ><i className="fas fa-home pr-2 mr-1"></i>&nbsp; Home</Link>
                           
                            <LinkBook to='/#aboutme' exact 
                            className={`${location.pathname}${location.hash}` === 
                             "/#aboutme" ? "active animate_link nav-link" : "animate_link nav-link "}>
                            <i className="fas fa-info pr-2 mr-1"></i>&nbsp; About Us
                            </LinkBook>
                            <LinkContainer exact to='/services'>
                                <Nav.Link className="animate_link"><i className="fas fa-server pr-2 mr-1"></i>&nbsp; Services</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer exact to='/projects'>
                                <Nav.Link className="animate_link"><i className="fas fa-briefcase pr-2 mr-1"></i>&nbsp; Projects</Nav.Link>
                                </LinkContainer>
                            
                            <LinkBook to='/#contacts' exact 
                             className={`${location.pathname}${location.hash}` === 
                             "/#contacts" ? "active animate_link nav-link" : "animate_link nav-link "}
                            >
                            <i className="fas fa-envelope pr-2 mr-1"></i>&nbsp; Contact Us

                            </LinkBook>
                    </Nav>         

                               
                </Navbar.Collapse>
              </Container>
                </Navbar>
        </div>
    )
}
export default Header;