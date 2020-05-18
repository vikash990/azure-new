import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap'; 


const AllCourseWrapper = styled('div')`
       display:flex;
       flex-wrap:wrap;
    
`;

const NoteWrapper = styled('div')`
     display:flex;
     flex-direction:row;
     margin:10px 50px;
`;

const CourseWrapper = styled('div')`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin:40px 40px 60px 70px;
  width:220px;
  height:200px;
  
  color:white;
  background-color:black;
  border-radius:14px;
  box-shadow: 3px 5px 10px 10px green;
           @media(max-width:768px) {
          margin:30px 50px;
      }
  
`;
const HeadingSubWrapper = styled('div')`
   text-align:center;
  
  
`;
const SubjectWrapper = styled('div')`
   
    text-align:center;
`;
const TimeFeesWrapper = styled('div')`
    display:flex;
    flex-direction:row;
    justify-content:space-around;  
    text-align:center;
    
  
`;
const ApplyKnowMoreWrapper = styled('div')`
   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-left:5px;
    margin-right:20px;

`;
const ApplyWrapper=styled('a')`

   display:flex;
   width:70px;
   height:30px;
   padding:3px 0px 0px 6px;
   background-color:orange;
   border-radius:9px;
   color:white;

   &:hover {
  color:black;
  text-decoration:none;
}

`;
const ContactWrapper = styled("div")`
   display:flex;
   width:100px;
   height:30px;
   padding:3px 0px 0px 6px;
   background-color:orange;
   border-radius:9px;
   color:white;

   &:hover {
     color:black;
     text-decoration:none;
   }
`;

const upComingBatches = [
     {   
         status:"upComing Batch",
         subject:"MERN Stack",
         date:"12/4/2020",
         fees:"6000/-",
         duration:"4 months"

     },
     { 
        status:"upComing Batch",
        subject:"DS and Algo",
        date:"17/4/2020",
        fees:"5000",
        duration:"3 months"

     },
     {  status:"upComing Batch",
        subject:"Python Junior",
        date:"20/4/2020",
        fees:"3000/-",
        duration:"2 months"

     },
     {  status:"upComing Batch",
        subject:"Web Development Junior",
        date:"25/4/2020",
        fees:"5000",
        duration:"3 months"

     },
     {  status:"upComing Batch",
        subject:"C++",
        date:"30/4/2020",
        fees:"3000",
        duration:"3 months"

     }
];

const runningBatches=[
     {  
        status:"Running Batch",
        subject:"DS and Algo"

     },
     {
        status:"Running Batch",
        subject:"MERN Stack"
     },
     {  
        status:"Running Batch",
        subject:"Python Junior"
     },
     {
        status:"Running Batch",
        subject:"Web Development junior"
     },
    
];

class CurrentClass extends React.Component{

    render(){
        return(
        <div>
            <NoteWrapper>
                <h4>We don't charge any fees for first 10 days.It is like a free demo for you.We take money 
                    only if you like the class because we care for  your satisfaction.</h4>
            </NoteWrapper>
           <AllCourseWrapper>
              {upComingBatches.map((item,index) => (
                   <CourseWrapper key={index}>
                      <HeadingSubWrapper> <h5>{item.status} </h5></HeadingSubWrapper>
                      <HeadingSubWrapper> <h6>{item.subject} </h6></HeadingSubWrapper>
                      <SubjectWrapper><p>{item.date}</p></SubjectWrapper>
                      <TimeFeesWrapper>
                         {/* <p> {item.duration}</p>
                         <p>{item.fees}</p> */}
                       </TimeFeesWrapper>
                       <ApplyKnowMoreWrapper>
                         <ContactWrapper>
                           <p>9117018454</p>
                        </ContactWrapper>
                           <ApplyWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Register</ApplyWrapper>
                       </ApplyKnowMoreWrapper>
                   </CourseWrapper>

            ))
           }
           </AllCourseWrapper>
           <AllCourseWrapper>
              {runningBatches.map((item,index) => (
                   <CourseWrapper key={index}>
                      <HeadingSubWrapper> <h5>{item.status} </h5></HeadingSubWrapper>
                      <HeadingSubWrapper> <h6>{item.subject} </h6></HeadingSubWrapper>
                   </CourseWrapper>

            ))
           }
           </AllCourseWrapper>
       </div>
        );

    }

}
export default CurrentClass;