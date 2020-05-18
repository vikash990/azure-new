import React from 'react';
import styled from "styled-components";
import { Row, Col, Card } from 'reactstrap';

import { DesktopWrapper, MobileWrapper, Separator } from './layout';
import angleBrackets from '../Images/angle_brackets.jpg';

const Wrapper = styled('div')`
    padding: 20px 100px;
    font-family: 'Nunito Sans', sans-serif;
    @media (max-width: 767px) {
        padding: 10px 20px;
    }
`;
const Title = styled('div')`
    font-size: 42px;
    font-weight: 400;
    @media(max-width: 767px){
        font-size: 32px;
        text-align: center;
    }
`;
const Description = styled('div')`
    font-size: 18px;
    @media(max-width: 767px){
        text-align: center;
        font-size: 16px;
    }
`;
const ColWrapper = styled(Col)`
    padding: 10px 80px;
    @media(max-width: 767px){
        padding: 10px;
    }
`;
const ImageWrapper = styled('img')`
    width: 100%;
`;

const WhatElse = () => (
    <Wrapper>
        <Row>
            <ColWrapper>
                <Title>
                    What Else To Know
                </Title>
                <Separator height={30}/>
                <MobileWrapper>
                    <ImageWrapper src={angleBrackets} align="middle"/>
                    <Separator height={30}/>
                </MobileWrapper>
                <Description>
                    We provide Live sessions by the industry experts where you get to
                    know about the various paradigms of problem solving and their
                    applications in the real world. We provide one to one sessions
                    for all types of doubt clarifications.
                </Description>
            </ColWrapper>
            <DesktopWrapper>
                <Col>
                    <ImageWrapper src={angleBrackets} align="middle"/>
                </Col>
            </DesktopWrapper>
        </Row>
    </Wrapper>
);

export default WhatElse;