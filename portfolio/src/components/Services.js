import React from 'react';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../style/Services.css'

const Services = (props)=>{
    const services_list = props.services_list;
    console.log(services_list)
    return(
        <Row>

            {services_list.map((service,index)=>{
                return(
                    <div class="col-lg-6 col-sm-6 my-3 pb-5" key={index}>
                    <a class="card">
                        <div class="box-shadow  rounded-circle mx-auto text-center bg-set" style={{"width": "200px", "height": "200px", "marginTop": "-65px"}}><img src={service.img} width="100%"/></div>
                        <div class="card-body text-center"> 
                            <h3 class="card-title pt-1">{service.title}</h3>
                            <p class="card-text text-sm">{service.desc}</p>
                        </div>
                    </a>
                </div>
                )
            })}
           
       
        
         
       </Row>
    );
}
export default Services