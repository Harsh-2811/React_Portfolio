import React,{useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Typed from 'react-typed'
import '../style/Poster.css'


const poster = {
    "height":"100vh",
    
    "backgroundImage":'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/images/Poster.jpeg")',
    "backgroundSize":"cover"
}
const Poster = (props)=>{
   const {title} = props
    return(
        <div style={poster}>
            <div className="parent">
                  <div className="child">
                  <div className='role'>
                            <h2 className="letters">Fullstack Web Developer</h2>
                    </div>
                    <div className="content">   
                        <Typed
                                className="typed-text"
                                strings={
                                    [
                                        'Web Development',
                                        'Web Designing',
                                        'API Development',
                                        'Desktop Softwares'
                                    ]
                                }
                                typeSpeed ={60}
                                backSpeed ={60}
                                loop

                            />                       
                                
                    </div>
                    <div className='role mt-5 pt-5' >
                        <h3 className="letters" style={{"fontSize":"1.2rem"}}>{title? title: ''}  <i class="fas fa-greater-than"></i></h3>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default Poster;