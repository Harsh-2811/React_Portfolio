import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../style/Services.css'

const Services = (props)=>{
    const services_list = props.services_list;
   
    return(
        
            <>
            {services_list.map((service,index)=>{
                return(
                    <Row>
                      { index%2 == 0 ? 
                        <>
                      
                         <div className="col-lg-6  col-xs-12 col-md-6 col-sm-12 p-3" key={index}>
                        <div className="tech-img ">
                             <img src={service.img} style={{'float':'right','filter': 'drop-shadow(3px 3px 3px #10375d)'}} className="service-image" width="80%"/>
                        </div>
                    </div>

                    <div className="col-lg-5  col-xs-12 col-md-5 col-sm-12  p-3 d-flex align-items-center" >
                        <div className="tech-content">
                                <h3 style={{'font-weight':'bold','font-size':'1.6rem','color':'#10375d'}} className="mt-5">{service.title}</h3>
                                <p style={{'font-weight':'bold','font-size':'1rem'}} className="my-4">
                                    {service.desc}
                                </p>
                            
                                <Container>
                                    <Row>
                                        <Col sm={6} md={6} lg={6}>
                                        <h5 style={{'font-weight':'bold'}}>Technologies</h5>
                                            <ul className="list-inline">
                                                    {
                                                        service.technologies.map((tech,index)=>{
                                                            return(
                                                                <li className="px-2 py-1" style={{'color':'#10375d'}}>
                                                            <i className={tech.icon} style={{'font-size':'1.5rem'}} ></i> <span style={{'font-weight':'bold','margin-left':'2%'}}>{tech.name}</span>
                                                            </li>
                                                            )
                                                        })
                                                    }

                                                
                                            </ul>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                                
                        </div>  
                    </div>
                    <div className="col-lg-1">

                    </div>  
                        </>
                      :<>
                        
                    <div className="col-lg-1">

                    </div>
                      <div className="col-lg-5  col-xs-12 col-md-5 col-sm-12 d-flex align-items-center p-3" key={index}>
                        <div className="tech-content">
                                <h3 style={{'font-weight':'bold','font-size':'1.6rem','color':'#10375d'}} className="mt-5">{service.title}</h3>
                                <p style={{'font-weight':'bold','font-size':'1rem'}} className="mt-2">
                                    {service.desc}
                                </p>
                                
                                
                                <Container>
                                    <Row>
                                        <Col sm={6} md={6} lg={6}>
                                        <h5 style={{'font-weight':'bold'}}>Technologies</h5>
                                            <ul className="list-inline">
                                                    {
                                                        service.technologies.map((tech,index)=>{
                                                            return(
                                                                <li className="px-2 py-1" style={{'color':'#10375d'}}>
                                                            <i className={tech.icon} style={{'font-size':'1.5rem'}} ></i> <span style={{'font-weight':'bold','margin-left':'2%'}}>{tech.name}</span>
                                                            </li>
                                                            )
                                                        })
                                                    }

                                                
                                            </ul>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                                
                        </div>  
                    </div>
                    <div className="col-lg-6  col-xs-12 col-md-6 col-sm-12 p-3" >

                        <div className="tech-img p-2 ">
                             <img src={service.img} style={{'filter': 'drop-shadow(3px 3px 3px #10375d)'}} className="service-image"  width="80%"/>
                        </div>
                    </div>

                    
                      </>}
                   
                      
                    </Row>


                   
                )
            })}
           
       
           
         
       </>
    );
}
export default Services