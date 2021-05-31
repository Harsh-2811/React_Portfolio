import React,{useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Typed from 'react-typed'
import '../style/Poster.css'


const poster = {
    "height":"100vh",
    
    "backgroundImage":'linear-gradient(rgba(16,55,93,0.8),rgba(16,55,93,0.8)),url("/images/banner-01.jpg")',
    "backgroundSize":"cover"
}
const Poster = (props)=>{
   const {title} = props
    return(
        <div style={poster}>
            <div className="parent">
                  <div className="child">
                  
                    <div className="">   
                    <div class="banner-text">
                            <div class="banner-content">
                                <span data-animation="fadeInUp" data-delay="0.3s" className="title-tag">
                                    IT Business Consulting
                                </span>
                                <h1 data-animation="fadeInLeft" data-delay="0.6s" className="title">
                                    Modern IT Soluations Provider Company
                                </h1>
                                <p data-animation="fadeInLeft" data-delay=".9s">

                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='role mt-5 pt-5' >
                        <h3 className="letters" style={{"fontSize":"1.2rem"}}>{title? 
                          title : ''}  </h3>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default Poster;