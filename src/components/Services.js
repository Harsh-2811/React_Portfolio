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
                    <div className="col-lg-4 col-sm-4 my-3 pb-5" key={index}>
                    <a className="card">
                        <div className=" box-shadow  rounded-circle mx-auto text-center bg-set service-image" style={{"width": "200px", "height": "200px", "marginTop": "-65px"}}><img src={service.img} width="100%"/></div>
                        <div className="card-body text-center"> 
                            <h3 className="card-title pt-1">{service.title}</h3>
                           
                        </div>
                    </a>
                </div>
                )
            })}
           
       
        
         
       </Row>
    );
}
export default Services