import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const MainWrapper = styled('div')`

     display:flex;
     flex-direction:column;
     min-height:75vh;

`;

const FormWrapper = styled('form')`
    
   display:flex;
   flex-direction:column;
   margin:60px 0px 60px 500px;
   border:8px;
   border-radius: 5px;
   background-color: #f2f2f2;
    width:330px;
    height:350px;
    padding-top:30px;
 

   @media(max-width:768px) {
    margin: 120px 0px 10px 25px;
    padding:10px;
    width:330px;
}

`;

const LabelWrapper = styled('label')`
    
   display:flex;
   flex-direction:column;
   width:300px;
   margin:8px;
   font-family:'Nunito Sans', sans-serif;
   font-style:italic;
   font-variant: normal;
   font-weight:350;

`;

const InputWrapper = styled('input')`
    
 
   width:300px;
   margin:20px 10px 10px 10px ;

`;



class Apply extends React.Component {
    constructor(props) {
      super(props);
      this.state = {user_name: '',
                    email:'',
                    mobile:'',
                  subject:''};
  
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
 
  
    handleSubmit(event) {
      event.preventDefault();
      const user={
          user_name:this.state.user_name,
          email:this.state.email,
          mobile:this.state.mobile
      }
      axios.post(`/routes/apply`,{ user_name:this.state.user_name,
      email:this.state.email,
      mobile:this.state.mobile}).then(response=>{
        if(response){
          this.props.history.push("/thanks");
        }
      }).catch(err=> {alert(err)})
    }
  
    render() {
      return (
        <MainWrapper>
        
          <FormWrapper onSubmit={this.handleSubmit}>
          <LabelWrapper>
            Name:
            <input type="text" value={this.state.user_name} onChange={event=>this.setState({user_name:event.target.value})}  required/>
          </LabelWrapper>
          <LabelWrapper>
            Email:
            <input type="email" value={this.state.email} onChange={event=>this.setState({email:event.target.value})} required/>
          </LabelWrapper>
          <LabelWrapper>
            Mobile:
            <input type="number" value={this.state.mobile} onChange={event=>this.setState({mobile:event.target.value})} required/>
          </LabelWrapper>        
          <InputWrapper type="submit" value="Submit" />
        </FormWrapper>
      
        </MainWrapper>
      );
    }
  }
export default Apply;