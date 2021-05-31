import React,{useState,useEffect} from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/Project.css';

const Project = ({project,index})=>{
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

    
        <div class="single-portfolio-item port-bg-1 design illustration" style={{"backgroundImage":`url('${project.image}')`}} key={index}>
        <div class="portfolio-content">
            <h4 class="portfolio-title">{project.title}</h4>
            <div class="portfolio-category">{project.technology}</div>
        </div>
    </div>
    )
}

export default Project;