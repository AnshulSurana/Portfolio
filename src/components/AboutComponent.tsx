import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import myImage from '../assets/blackbg.jpg';

const AboutContainer = styled.div`
    padding: 10px;
    margin: 0;
    display: block;
    height: 60vh;
    justify-content: center;
    background-color: ${({ theme }) => theme.abountSection};
`;

const Divc = styled.div`
    display: flex;
`;

const Pc = styled.span`
    text-align: center;
    font-size:8px;
    background: url(${myImage}) center / cover;
    background-repeat: no-repeat;
    background-size: 45% 145%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255,.1);
    font-family: 'Anton', sans-serif;
`;

const BoxComponent = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    margin-left: auto;
    width: 1200px;
    justify-content: center;
    background: ${({ theme }) => theme.aboutBackground};
    border-radius: 5px;
    height: 58vh;
    box-shadow: 20px 20px 10px #000;
`;
const PageDiv = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    margin-left: auto;
    width: 1220px;
    justify-content: center;
    background: #FFF;
    border-radius: 5px;
    height: 58vh;
    box-shadow: 10px 8px;
`;
const CardElement = styled.div`
    width: 100%;
    height: 35vh;
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
    transition: background 1.08s;
    background: url(${myImage});
    background-size: 430px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    
    &:hover {
        background-size: 450px;
        background-position: top;
        
        >   span {
            opacity: 1;
            transform: translateY(0);
        }
        
        > .social-media-list  {
            opacity: 1;
        }
    }
    &:before:{
       content: "";
       position: absolute;
       top: 8px;
       left: 8px;
       bottom: 8px;
       right: 8px;
       border-radius: 15px;
       border: 1px solid #f6f6f6;
       opacity: 0;
       transition: opacity 0.8s;
    }
    &:hover::before {
        opacity: 1;
    }
    
    > span {
        position: absolute;
        top: 15px;
        left: 25px;
        font-family: "Segoe UI", Tahoma, Geneva, sans-serif;
        color: #f6f6f6;
        font-weight: bolder;
        font-size: 32px;
        text-shadow: 0 5px 5px #111;
        opacity: 0;
        transition: all 0.8s;
        transform: translateY(20px);
        
        &:hover {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    >.social-media-list {
        padding: 0px;
        list-style: none;
        bottom: 15px;
        left: 25px;
        position: absolute;
        opacity: 0;
        transition: all 0.8s;
        
        > li:not(:last-child) {
            margin-bottom: 20px;
        }
        
        i {
            color: #f6f6f6;
            font-size: 18px;
        }
        
        &:hover {
            opacity: 1;
        }
    }
`;
const LinksElements = styled.div`
    display: flex;
    background: #121212;
`;

const AboutDetails = styled.div`
    color: #fff;
    margin: 30px;
`;

const FlexComponent = styled.div`
    display: block;
`;

const ProjectsButton = styled.button`
    background: transparent;
    color: #FFF;
    line-height: 10px;
    font-weight: bold;
    font-family: 'PT Serif', serif;
    margin-left: 50px;
    padding: 10px;
    border: 3px solid black;
    border-radius: 5px;
    width: 5vw;
    height: 5vh;
    
    &:hover {
     border: 3px solid #2ed573;
     cursor: pointer;
    }
`;
const ContactsButton = styled.button`
    background-color: #2ed573;
    color: #000;
    line-height: 10px;
    font-weight: bold;
    font-family: 'PT Serif', serif;
    margin-left: 50px;
    padding: 10px;
    border: 3px solid black;
    border-radius: 5px;
    width: 5vw;
    height: 5vh;
    
    &:hover {
     border: 3px solid #FFF;
     background-color: #7bed9f;
     cursor: pointer;
    }
`;

const AboutComponent = () => {
    return (
        <AboutContainer>
                <BoxComponent>
                        <AboutDetails>
                            <p>
                            about this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dreamabout this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dream about this text on an image i just tried in my dream
                            </p>
                            <ProjectsButton>Projects</ProjectsButton>
                            <ContactsButton>Contact</ContactsButton>
                        </AboutDetails>
                        <CardElement>
                            <span>Anshul Surana</span>
                            <ul className="social-media-list">
                                <li> <a href="#"> <i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </CardElement>
                </BoxComponent>
        </AboutContainer>
    );
}

export default AboutComponent;
