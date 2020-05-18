import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

import InfoBar from './Components/infoBar.js';
import Header from './Components/header.js';
import Home from './Components/home.js';
import CurrentClass from './Components/currentClass.js';
import Apply from './Components/apply.js';
import About from './Components/about.js';
import Courses from './Components/courses.js';
import Contact from './Components/contact.js';
import OurTeam from './Components/our-team.js';
import SuccessStories from './Components/success-stories';
import SideDrawer from './Components/Slider/sideDrawer.js';
import BackDrop from './Components/BackDrop/backDrop.js';
import Footer from './Components/footer.js';
import KnowMoreJunior from './Components/knowMoreJunior.js';
import KnowMoreSenior from './Components/knowMoreSenior.js';
import Thanks from './Components/thanks.js';

const MainWrapper =styled('div')`
  height:100%;
`;
 
const routeItems = [
  {
    path: '/',
    component: Home

},
{
  path: '/about',
  component:About
},
{
  path: '/courses',
  component:Courses
},
{
  path:'/contact',
  component:Contact
},
{
  path: '/currentClass',
  component:CurrentClass
},
  {
      path: '/apply',
      component: Apply
  },
  {
    path: '/our-team',
    component: OurTeam
},
{
  path: '/success-stories',
  component: SuccessStories
},
{
    path: '/knowMoreJunior',
    component: KnowMoreJunior

},
{
    path: '/knowMoreSenior',
    component: KnowMoreSenior

},
{
  path: '/thanks',
  component: Thanks

},
];


class App extends React.Component{
  state = {
    sideDrawerOpen:false
  };
  drawerToggleClickedHandler=() => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false});
  }

  render(){
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop=<BackDrop click={this.backdropClickHandler}/>;
    }
    return(
      <Router>
        <MainWrapper>
          {/* <InfoBar/> */}
          <Header drawerClickHandler={this.drawerToggleClickedHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
          {routeItems.map((item,index) => (
             <Route key={index} path={item.path} exact strict component={item.component}/>

            ))
           }
        </MainWrapper>
        <Footer/>
      </Router>
      );
  }
}

export default App; 