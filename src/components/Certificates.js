import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';

const Certificates = ({certi_list})=>{
    return(
       
            <div>
                 <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 certificate-title">Certificates</h2>
                    
                </Col>
                </Row>
                <Row className="">
                    {
                        certi_list.map((cert,index)=>{
                            return(
                                <Col md={4} lg={4} sm={12} key={index} className="my-2">
                                    <img src={cert} alt="certificate"/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
    )
}

export default Certificates;