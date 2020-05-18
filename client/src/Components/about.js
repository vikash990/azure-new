import React from 'react';
import styled from "styled-components";


const AboutWrapper = styled('div')`
     margin-left:400px;

     @media (max-width: 767px) {
        margin: 10px;
    }

`;

const AboutUsInfoWrapper = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
height: 500px;
width: 350px;
border: 5px;
padding:20px
border-radius: 12px;
box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #969696;
border-left: 6px solid #17a2b8;

@media (max-width: 767px) {
    margin: 10px 0;
}
`;

const HeadWrapper = styled('div')`
    
    text-align:center;
    font-family:'Nunito Sans', sans-serif;
     font-style:italic;
     font-variant: normal;
     font-weight:550;     
     color:black;
     margin:15px;

`;

const DescriptionWrapper = styled('div')`
text-align:center;
font-family:'Nunito Sans', sans-serif;
 font-style:italic;
 font-variant: normal;
 font-weight:550;     
 color:black;
 margin:20px;

`;

class About extends React.Component{

    render(){
        return(
            <AboutWrapper>
               <AboutUsInfoWrapper>
                  <HeadWrapper>
                      <h5>DevikTech Education Services</h5>
                  </HeadWrapper>
                  <DescriptionWrapper>
                      <p>we at deviktech strongly believe that student has very high potential to 
                         achieve their goals.But due to lack of correct guidance they are unable to 
                         achieve their goals.We with the help of our expert provide best platform 
                         to achieve their goals.We help them to explore their potential.
                      </p>
                      <p>
                        Student can enroll with our live online courses and start building their 
                        bright future.Then can save time.We provide 10 days free lecture to the 
                        students so that they will get the option to understand our classes and
                        our expert because we care student satisfaction. 
                      </p>
                  </DescriptionWrapper>
               </AboutUsInfoWrapper>
            </AboutWrapper>
        );
    }
}

export default About;