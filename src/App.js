import React from 'react';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import {Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';
import ContactScreen from './screens/ContactScreen';


import Header from './components/Header';
import FooterPage from './components/FooterPage';
import ProjectScreen from './screens/ProjectScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen'
import ScrollTop from './components/ScrollTop';

const App =() =>{
  return (
    <Router>
    <Header/>
      <Switch>
      <main className="">
      
      <Route exact path='/' component={(props)=> <HomeScreen />}  />
      <Route exact path='/services' component={(props)=><ServiceScreen title="Services" {...props}/>} />
      <Route exact path='/projects' component={(props)=> <ProjectScreen title="Projects" {...props}/>} />
      <Route exact path='/projects/:project' component={ProjectDetailScreen} />
      <Route exact path='/contacts' component={(props)=>{
        return <ContactScreen title="Contact" {...props}/>
      }} />
      



    
  </main>
      </Switch>
      <ScrollTop/>
    <FooterPage/>
  </Router>
  );
}

export default App;
