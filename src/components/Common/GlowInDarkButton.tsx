import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    position: relative;
    padding: 0.5em 2em;
    color: ${({ theme }) => theme.downloadButton};
    font-size: 15px;
    font-weight: bold;
    text-transform:uppercase;
    text-shadow: 0 0 0.5em ${({ theme }) => theme.downloadButton};
    background-color: ${({ theme }) => theme.downloadButtonBg};
    border: 0.25em solid ${({ theme }) => theme.downloadButton};
    border-radius: 1em;
    box-shadow: 0 0 1em 0.25em ${({ theme }) => theme.downloadButton};
    0 0.4em 1em ${({ theme }) => theme.glowColor};,
    inset 0 0 0.75em 0.25em ${({ theme }) => theme.downloadButton};
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    
    &:after {
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme.glowColor};
        filter: blur(2em);
        opacity: 0.7;
        pointer-event: none;
        transform: perspective(1.5em) rotateX(15deg) scale(1, 0.6);
    }
    &:hover {
        color: ${({ theme }) => theme.downloadButtonBg};
        background-color: ${({ theme }) => theme.downloadButton};
        box-shadow: 0 0 1em 0.25em
        ${({ theme }) => theme.downloadButton}, 0 0 4em 2em
        ${({ theme }) => theme.glowColor};,
        inset 0 0 0.75em 0.25em ${({ theme }) => theme.downloadButton};;
    }
    &:active {
        box-shadow: 0 0 0.6em 0.25em
        ${({ theme }) => theme.downloadButton};, 0 0 2.5em 2em
        ${({ theme }) => theme.glowColor};,
        inset 0 0 0.5em 0.25em ${({ theme }) => theme.downloadButton};;
    }
`;

const GlowInDarkButton = () => {
    return (<ButtonStyle>Download CV</ButtonStyle>)
}

export default GlowInDarkButton;



