import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'reactstrap';

import {Separator} from "./layout";
import logof from '../Images/facebook.png';
import logoi from '../Images/instagram.png';
import logot from '../Images/twitter.png';
import logol from '../Images/linkedin.png';

const FooterWrapper = styled('div')`
     display:flex;
     flex-direction:column;
     justify-content:space-around;
     font-family: 'Nunito Sans', sans-serif;
     
`;

const RowWrapper = styled(Row)`
     display:flex;
     padding:50px 30px 30px 130px;
     background: rgba(0, 0, 0, 0.9);
     width:104%;
     @media(max-width:768px) {
        padding:20px 20px 20px 30px;
    }
      `;
      
const ColWrapper = styled(Col)`
     color:white;
`;

const FollowWrapper = styled('div')`
         display:flex;
         flex-direction:row;
         justify-content:flex-end;
         height:60px;
         background-color:black;
         padding-top:10px;
         opacity: 0.9;
         color:white;
         width:100%;
         
`;
const SocialLinkWrapper= styled('div')`
        display:flex;
        flex-direction:row;
        margin-right:20px;
      
   


`;

const AnchorWrapper = styled('a')`
 

`;

const FollowText = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;    
`;

const Head4Wrapper = styled('h4')`
      font-size: 24px
      font-weight: 600;
      opacity: 0.3;
      color: white;
`;

const footerItems = [
    
    {
      route: '/about',
      label:'About us'
    },
    {
      route: '/our-team',
      label:'Our Team'
    },
    {
        route: '/succes-stories',
        label:'Sucess Stories'
      },
    {
      route: '/new',
      label:'New'
    },
    
];


class Footer extends React.Component{

    render(){
        return(
            <FooterWrapper>
           <RowWrapper>
               <ColWrapper xs={6} sm={3} >
                     <Head4Wrapper>K-12 </Head4Wrapper>
                   <Separator/>
                      <p>Python(Junior)</p>
                      <p>Web Development(Junior)</p>
              </ColWrapper>
               <ColWrapper xs={6} sm={3}>               
                      <Head4Wrapper>Courses </Head4Wrapper>
                   <Separator/>
                      <p></p>
                      <p>C++</p> 
                      <p>Python</p> 
                      <p>Java</p>  
                      <p>MERN Stack</p>                
                      <p>DSA</p>
                  
               </ColWrapper>
               <ColWrapper xs={6} sm={3}>
                      <Head4Wrapper>Work with Us</Head4Wrapper>
                   <Separator/>
                       <p>Instructor</p>
                       <p>Marketing</p> 
                       <p>Content Development</p>    
                       <p>Intership</p>              
               </ColWrapper>
               <ColWrapper xs={6} sm={3}>                
                      <Head4Wrapper>Contact Us</Head4Wrapper>
                   <Separator/>
                       <p>9117018454</p>
                       <p>9718365756</p>                 
               </ColWrapper>        
            </RowWrapper>
            <FollowWrapper>
                   <FollowText>Follow Us</FollowText>
                <SocialLinkWrapper>
                   <AnchorWrapper href="https://www.facebook.com/Deviktech-101424994871042/" target="_blank"><img src={logof}/></AnchorWrapper>
                    <AnchorWrapper href="https://twitter.com/VikashD39681388" target="_blank"><img src={logot}/></AnchorWrapper>
                   <AnchorWrapper href="https://www.linkedin.com/in/devik-tech-b956891a6" target="_blank"><img src={logol}/></AnchorWrapper>
                   <AnchorWrapper href="https://www.instagram.com/deviktech/" target="_blank"><img src={logoi}/></AnchorWrapper>
                   </SocialLinkWrapper>
            </FollowWrapper>
            </FooterWrapper>
     );
    }
}
export default Footer;