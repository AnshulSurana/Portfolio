import React from 'react';
import styled, { keyframes } from 'styled-components';

const Typing = keyframes`
 from{
    width: 0%;
 }
 to{
    width: 100%;
 }
`
const Cursor = keyframes`
 from,
  to {
    border-color: transparent
  }
  50% {
    border-color: pink;
  }
`
const TypingComponentDiv = styled.div`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-family: 'Special Elite', cursive;
    animation-name: ${Typing};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: steps(24);
`;
const TextComponentDiv = styled.div`
    margin-left: 30px;
    font-family: 'Roboto', sans-serif;
    font-family: 'Special Elite', cursive;
    animation-name: ${Cursor};
    max-width: max-content;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid pink;
    color: #000000;
    font-size: 20px;
`;


const TypingComponent = () => {
    return (
        <TypingComponentDiv>
            <TextComponentDiv>
                This Website is created from scratch.
            </TextComponentDiv>
        </TypingComponentDiv>
    );
}

export default TypingComponent;
