import React from 'react';
import styled from "styled-components";


const BackDropWrapper = styled('div')`
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:rbga(0,0,0,0.3);
    z-index:100;

`;

const BackDrop = props =>(
    <BackDropWrapper onClick={props.click}/>

);

export default BackDrop;
