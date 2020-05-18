import React from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const AllWrongWrapper = styled('div')`

  min-height:70vh;
  
`;
const MainWrapper = styled('div')`
   
   dispaly:flex;
   flex-direction:column;
   justify-content:space-around;
   margin:70px  0px 100px 0px;
   text-align:center;

   @media(max-width:768px) {
    margin-left:10px;
    width: 300px;
   }


`;


const MessageWrapper = styled('p')`
   
     font-style:normal;
     font-weight: 450;
     padding-top:20px;

`;

const AllLinkWrapper = styled('div')`
    display:flex;
    background-color:blue;
    width:80px;
    margin:30px 0px 0px 530px;
    text-align:center;
    border-radius:7px;

    @media(max-width:768px) {
        margin:16px 0px 0px 120px;
       
       }

    
`;

const NavLinkWrapper = styled(NavLink)`
  
   
   width:100px;
   height:30px;
   color:white;
 
    
 
     &:hover {     
    color:black;
    text-decoration:none;
  }


`;

class Thanks extends React.Component{

    render() {
        return(
            <AllWrongWrapper>
                <MainWrapper>           
                  <MessageWrapper>Thanks for applying we will contact you.</MessageWrapper>
                  <AllLinkWrapper>
                     <NavLinkWrapper  to ="/" exact >Home</NavLinkWrapper>
                  </AllLinkWrapper>
                </MainWrapper>
            </AllWrongWrapper>
        );
    }
}

export default Thanks;