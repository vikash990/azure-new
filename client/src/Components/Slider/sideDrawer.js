import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import './sideDrawer.css';

const NavWrapper = styled('div')`
   height:100%;
   background: rgba(0, 0, 0, 0.9);
   box-shadow:2px 0px 5px rbga(0,0,0,0.5);
   position:fixed;
   top:0;
   left:0;
   padding:10px 10px;
   width:30%;
   max-width:400px;
   z-index:200;
   transform:translateX(-100%);
   transition:transform 0.5s ease-out;
    `;

const NavLinkWrapper= styled(NavLink)`
   list-style:none;
   display:flex;
   flex-direction:column;
   color:white;
   text-decoration:none;
   &:hover {     
    color:black;
    text-decoration:none;
  }
`;

const SideDrawer = props => {
    let drawerClasses='side-drawer';
    if(props.show) {
        drawerClasses='side-drawer open';
    }

    return(
     <NavWrapper className={drawerClasses}>        
           
           <NavLinkWrapper to ="/about" exact >About Us</NavLinkWrapper>
          {/*  <NavLinkWrapper to ="/courses" exact >Courses</NavLinkWrapper> */}
           <NavLinkWrapper to ="/contact" exact >Contact Us</NavLinkWrapper>
          {/*  <NavLinkWrapper to ="/currentClass" exact >Current Class</NavLinkWrapper> */}
    </NavWrapper>
    )

}

export default SideDrawer;