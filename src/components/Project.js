import React,{useState,useEffect} from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/Project.css';

const Project = ({project})=>{
    const type = project.type;
    var fontIcon;
    if(type === "Website"){
        fontIcon = "fas fa-globe"
    }
    if(type === "E-Commerce Solution"){
        fontIcon = "fas fa-shopping-cart"
    }
    if(type === "Desktop Software"){
        fontIcon = "fas fa-desktop"
    }

    function weblink(){
        if(type == "Website"){
            return(
               <a href="www.google.com"> <i className="fas fa-link"></i> </a>
            )
        }
    }
    return(

    
        <Col md={4} lg={4} sm={12} >
        <div className="content my-3"> 
                <div className="content-overlay"></div> 
                <img className="content-image" src={project.image} width="20%"/>
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{project.title}</h3>
                    <p className="content-text">
                        
                    <Link to={`/projects/${project}`} style={{"textDecoration":"none","fontSize":"0.9rem"}}>
                        <i className={fontIcon}></i> {project.type}
                     </Link> &nbsp; 
                    {weblink()}
                    </p>
                </div>
                 </div>
    </Col>
    )
}

export default Project;