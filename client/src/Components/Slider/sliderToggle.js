import React from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

import dblogo from "./deviktechlogo.png"; 

const NavWrapper = styled('div')`
        display: flex;
        width:20px;
        flex-direction:row;
        justify-con
        
       
  `;

const ButtonWrapper = styled('button')`
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:30px;
        width:35px;
        background:transparent;
        border:none;
        cursor:pointer;

        &:focus{
            outline:none;
        }
    `;

const ButtonLine = styled('div')`

       width:30px;
       height:2px;
       background:white;
    
    `;

const NavLinkWrapper= styled(NavLink)`

    height:10px;
    width:70px;
    margin-left:15px;
   
 `;



const SliderToggle = props => (
 <NavWrapper>    
    <ButtonWrapper onClick={props.click}>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
    </ButtonWrapper>   
    <NavLinkWrapper to ="/" exact ><img src={dblogo}/></NavLinkWrapper>
 </NavWrapper>
);

export default SliderToggle;