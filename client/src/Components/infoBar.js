import React from 'react';
import styled from 'styled-components';

const InfoBarWrapper = styled('div')`
     height:20px;
     color:white;
     background-color:green;
     padding-left:500px;

     @media(max-width:769px){
          padding-left:50px;
      }

`;


class InfoBar extends React.Component{


   render(){
        return(
        <InfoBarWrapper>
          <p>Code for K-12  +   Code for senior</p>
       </InfoBarWrapper>
        );

    }

}
export default InfoBar;