import React,{useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Typed from 'react-typed'
import '../style/SPoster.css'


const poster = {
    "height":"60vh",
    
    "backgroundImage":'linear-gradient(rgba(16,55,93,0.8),rgba(16,55,93,0.8)),url("/images/banner-02.jpg")',
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
                                
                                <h2 data-animation="fadeInLeft" data-delay="0.6s" className="stitle title">
                                   {title}
                                </h2>
                                
                                
                            </div>
                        </div>
                    </div>
                   
                  </div>
            </div>
        </div>
    )
}

export default SecondaryPoster;