import React,{useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Typed from 'react-typed'
import '../style/Poster.css'


const poster = {
    "height":"100vh",
    
    "backgroundImage":'linear-gradient(to right,rgba(16,55,93,0.5),rgba(16,55,93,0.9)),url("/images/banner-01.jpg")',
    "backgroundSize":"cover"
}
const Poster = (props)=>{
   const {title} = props
    return(
        <div style={poster}>
            <div className="parent ">
                  
                  
                    <div className="">   
                    <div className="banner-text container">
                            <Row className=""  >
                                
                                <Col lg={12} className="row-height d-flex  justify-content-center align-items-center">
                                <div class="banner-content">
                                <span data-animation="fadeInUp" data-delay="0.3s" className="title-tag">
                                    Shree Siddhivinayak Infotech
                                </span>
                                <h1 data-animation="fadeInLeft" data-delay="0.6s" className="title">
                                    Modern IT Solutions Provider Company
                                </h1>
                               
                                
                                
                                
                            </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='role mt-5 pt-5' >
                        <h3 className="letters" style={{"fontSize":"1.2rem"}}>{title? 
                          title : ''}  </h3>
                    </div>
                 
            </div>
        </div>
    )
}

export default Poster;