import React,{useState,useEffect} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import '../style/Project.css';
import Project from '../components/Project';
import Poster from '../components/Poster';
const ProjectScreen = (props)=>{
    
    const [tech_list,set_TechList] = useState([
        "All",
        "Django",
        
        "Python",
        "React",
        "Java"
    ]); 

   const [projects,setProjects] = useState( 
    [
        {
            "id":"1",
            "title":"Pizza Store",
            "technology":"Django and Python ",
            "image":"/images/Pizza.JPG",
            "type":"Website",
        },
        {
            "id":"2",
            "title":"Tourisam Website",
            "technology":"Django and Python",
            "image":"/images/Tour.JPG",
            "type":"Website",
        },
        {
            "id":"3",
            "title":"Proshop",
            "technology":"React",
            "image":"/images/E_Comm.JPG",
            "type":"E-Commerce Solution",
        },
        {
            "id":"4",
            "title":"Car Zone",
            "technology":"Django and Python",
            "image":"/images/carsellwebsite.PNG",
            "type":"Website",
        },
        {
            "id":"5",
            "title":"Billing Software",
            "technology":"Java",
            "image":"/images/Billing.PNG",
            "type":"Desktop Software",
        },
        
        {
            "id":"7",
            "title":"Meet and Chat ",
            "technology":"React",
            "image":"/images/React_Chat.JPG",
            "type":"Website",
        },
    ]

)
   const [selectedprojects,setSelectedProjects] = useState(projects)

    const [selectedType,setSelectedType] = useState("");  
    
    
    useEffect(()=>{
        setSelectedType("All");
        
    },[])

    const changeSelectedType = (type)=>{
            setSelectedType(type)
            if(type === "All"){
                setSelectedProjects(projects)
            }
            else{
                setSelectedProjects(projects.filter((project)=>{
                    
                    
                    if(project.technology.includes(type)){
                        return project
                    }
               
            }))
            }
            
    }
    console.log(selectedprojects)
    return(
        <div>
            <Poster title={props.title}/>
        <section className="section-projects" style={{"backgroundImage":'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/images/Service_background.png")',"marginBottom":"-16px"}}>
            <Container>
                    <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 project-title" style={{"color":"#18bc9c"}}>Recent Work</h2>
                    
                </Col>
                </Row>
                <div class="button-group filters-button-group">
                   {tech_list.map((tech,index)=>{
                       return(
                        <Button className={`button ${tech == selectedType?'is-checked':''    }`} data-filter="*" onClick={()=>changeSelectedType(tech)} key={index}>{tech}</Button>
                       )
                   })}
                    
                </div>

                   <Row className="my-3">
                    
                    {
                        selectedprojects.map((project)=>{
                            return(
                                <Project project={project}/>
                            )
                        })
                    }
                    
                    </Row>
        
            </Container>
            
    </section>
        </div>
    )
}

export default ProjectScreen