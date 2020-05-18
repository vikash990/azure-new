import React from 'react';
import styled from "styled-components";


const CoursesWrapper = styled('div')`
     

`;

const NoteWrapper = styled('div')`
     display:flex;
     flex-direction:row;
     margin:10px 50px;
`;


const CoursesInfoWrapper = styled('div')`
   display:flex;
   flex-direction:column;
   width:600px; 
   margin:30px 0px 50px 350px;
   padding:20px 60px;
   color:white;
   background-color:rgba(0,0,0,0.8); 
   box-shadow: 10px 10px 10px 10px  green;

   @media(max-width:768px) {
    margin:30px 5px 50px 5px;
    width:300px;
}
    
`;

const HeadWrapper = styled('div')`
    
    text-align:center;
    margin-bottom:30px;

`;

const DescriptionWrapper = styled('div')`
   

`;

const AllCourseWrapper = styled('div')``;



class Courses extends React.Component{

    render(){
        return(
            <CoursesWrapper>
                <NoteWrapper>
                <h4>We don't charge any fees for first 10 days.It is like a free demo for you.We take money 
                    only if you like the class because we care for your satisfaction.</h4>
            </NoteWrapper>
               <CoursesInfoWrapper>
                  <HeadWrapper>
                      <h4>Our Courses</h4>
                  </HeadWrapper>
                  <AllCourseWrapper>
                      <p>Python Junior</p>
                      <p>Java Junior</p>
                      <p>Web Development Junior</p>
                      <p>C</p>
                      <p>C++</p>
                      <p>Python Senior</p>
                      <p>Core Java</p>
                      <p>MERN Stack(MongoDB ,Express,ReactJs,NodeJs)</p>
                      <p>React and Redux</p>
                      <p>NodeJs</p>
                      <p>MongoDb and Postgressql</p>
                      <p>Data Structure and Algorithm</p>
                      <p>Data Structure</p>
                      <p>Algorithm</p>
                  </AllCourseWrapper>
                  
               </CoursesInfoWrapper>
             
            </CoursesWrapper>
        );
    }
}

export default Courses;