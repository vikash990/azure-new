import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Card, Button } from "reactstrap";
import { useHistory } from "react-router"

const CardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    height: 500px;
    width: 350px;
    border: 5px;
    border-radius: 12px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #969696;
    border-left: 6px solid #17a2b8;
    
    @media (max-width: 767px) {
        margin: 10px 0;
    }
`;

const ImageWrapper = styled('img')`
    margin: 30px 0;
    height: 150px;
`;
const CourseName = styled('div')`
    font-size: 32px;
    margin:  25px 35px;
    text-align: center;
    font-weight: 500;
    font-family: 'Nunito Sans', sans-serif;
`;
const Description = styled('div')`
    font-size: 18px;
    font-weight: 300;
    margin: 0 20px;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
`;
const Fee = styled('div')`
    font-size: 32px;
    font-weight: 300;
`;
const ButtonWrapper = styled(Button)`
    margin: 15px 0;
`;

const onRegisterClick = () => {
    window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1',
        '_blank'
    )
};

const CourseCard = ({ name, description, lectures, image, fee }) => (
    <CardWrapper>
        <ImageWrapper src={image}/>
        <CourseName>
            {name}
        </CourseName>
        <Description>
            {description}
            <br/>
            ({lectures} Lectures)
        </Description>
       {/*  <Fee>
            {`₹ ${fee}`}
        </Fee> */}
       {/*  <ButtonWrapper size='lg' color='info' onClick={() => {onRegisterClick()}}>
            Register Now
        </ButtonWrapper> */}
    </CardWrapper>
);

CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lectures: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
};

export default CourseCard;