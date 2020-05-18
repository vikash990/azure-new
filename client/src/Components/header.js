import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import dblogo from "../Images/deviktechlogo.png"
import SliderToggle from './Slider/sliderToggle.js';

const NavWrapper = styled('div')`
        display: flex;
        flex-direction: row;
        height:60px;
        padding:12px 15px 12px 15px;
        background: rgba(0, 0, 0, 0.9);         

    `;

const ApplyWrapper = styled('div')`
    
     dispaly:flex;
     margin:0px 40px;
     width:70px;
     border-radius:8px;  
     font-family:'Nunito Sans', sans-serif;
     font-style:italic;
     font-variant: normal;
     font-weight:550;     
     background-color:blue;
     text-align:center;

     @media(max-width:768px) {
        margin:0px 0px;
        width:150px;
    }
     
`;


const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
      color:white;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }

      @media(max-width:768px) {
          display:none;
      }
    
`;

const Spacer = styled('div')`
    flex:1

`;
const SliderToggleWrapper=styled('div')`
   @media(min-width:769px){
       display:none;
   }
`;

const ApplyNavLinkWrapper=styled(NavLink)`
     display: flex;
     flex-direction: column;
     color:white;
     text-decoration:none;
     margin-top:5px;
     font-family:'Nunito Sans', sans-serif;
  font-style:italic;
  font-variant: normal;
  font-weight:550;

  &:hover { 
    color:black;
    text-decoration:none;
}
`;

const AllNavLinkWrapper = styled('div')`

  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width:350px;
  margin:0px 0px 0px 30px;
  font-family:'Nunito Sans', sans-serif;
  font-style:italic;
  font-variant: normal;
  font-weight:550;
  

`;



class Header extends React.Component{

    render(){
        return(
        <NavWrapper>
            <SliderToggleWrapper>
                <SliderToggle click={this.props.drawerClickHandler}/>
            </SliderToggleWrapper>
        <AllNavLinkWrapper>
           <NavLinkWrapper to ="/" exact ><img src={dblogo}/></NavLinkWrapper>
          {/*  <NavLinkWrapper to ="/courses" exact >Courses</NavLinkWrapper> */}
           <NavLinkWrapper to ="/about" exact >About Us</NavLinkWrapper>         
           <NavLinkWrapper to ="/contact" exact >Contact Us</NavLinkWrapper> 
        </AllNavLinkWrapper>
            <Spacer/>        
    
       <ApplyNavLinkWrapper to ="/apply" exact >Apply</ApplyNavLinkWrapper> 
     
        </NavWrapper>
        );

    }
}
export default Header;