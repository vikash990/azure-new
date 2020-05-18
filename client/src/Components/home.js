import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'reactstrap';

import { Separator } from './layout';
import CourseCard from './course-card';
import courseInfo from './courses-info';
import ExploitPotential from './exploit-potential';
import WhatElse from './what-else';

const HomeWrapper = styled('div')`
    padding: 20px;
    min-height: 65vh;
    font-family: 'Nunito Sans', sans-serif;
`;
const TitleWrapper = styled('div')`
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    @media(max-width: 767px){
        font-size: 24px;
    }
`;
const NewWrapper = styled('div')`
    display: flex:
    flex-direction: row;
    padding: 20px;
`;
const CardWrapper = styled(Row)`
    justify-content: center;
`;

const Home = () => (
    <HomeWrapper>
        <ExploitPotential/>
        <Separator height={40}/>
        <TitleWrapper>Our Courses</TitleWrapper>
        <NewWrapper>
            <CardWrapper>
                {courseInfo.map(course => (
                    <CourseCard
                        name={course.name}
                        description={course.description}
                        lectures={course.lectures}
                        fee={course.fee}
                        image={course.image}
                    />
                ))}
            </CardWrapper>
        </NewWrapper>
        <Separator height={30}/>
        <WhatElse/>
        <Separator height={40}/>
    </HomeWrapper>
);

export default Home;