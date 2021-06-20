import React,{useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Typed from 'react-typed'
import '../style/SPoster.css'


const poster = {
    "height":"60vh",
    
    "backgroundImage":'linear-gradient(to right,rgba(16,55,93,0.5),rgba(16,55,93,0.9)),url("/images/banner-02.jpg")',
    "backgroundSize":"cover"
}
const SecondaryPoster = (props)=>{
   const {title} = props
    return(
        <div style={poster}>
            <div className="parent">
                  <div className="child">
                  
                    <div className="">   
                    <div class="banner-text">
                            <div class="banner-content">
                            <Row className=""  >
                            <div class="banner-content">
                                <Col lg={12} className="srow-height d-flex justify-content-center align-items-center">
                                <h1 data-animation="fadeInLeft" data-delay="0.6s" className="stitle title">
                                   {title}
                                </h1>
                                
                                
                                
                            
                                </Col>
                            </div>
                            </Row>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                   
                  </div>
            </div>
        </div>
    )
}

export default SecondaryPoster;