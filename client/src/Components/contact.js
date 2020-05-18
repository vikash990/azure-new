import React, { Component } from 'react';
import styled from "styled-components";

 
const ContactWrapper = styled('div')`
   
     display:flex;
     flex-direction:row-reverse;
      background:url("/googleMap.png");
      margin:60px;
      background-length:500px;
     @media(max-width:768px) {
      flex-direction:column;
      margin: 10px 0px 10px 0px;
  }
`;

 
const AddressWrapper = styled('div')`
   display:flex;
   flex-direction:column;
   
   width:300px; 
   margin:70px ;
   padding:80px 60px;
   color:black;
   background-color:white; 
  

   @media(max-width:768px) {

    margin:20px 0px 10px 40px;
    width:250px;
    height:400px;
    padding:40px 60px;
}
    
`;

class Contact extends Component {
  
  render() {
    return (
      <ContactWrapper>
       
        <AddressWrapper>
          <h5>Bangalore Head(Office)</h5>
          <p></p>
          <p>New friends Colony 80 Feet Road,
                 4th Block, Koramangala,
                 Bengaluru - 560034</p>
            <p></p>
           <p>Email:-info@deviktech.com</p>
           <p>Contact Us</p>
           <p>9117018454,9718365756</p>  
        </AddressWrapper>
      </ContactWrapper>
    );
  }
}
 
export default Contact;