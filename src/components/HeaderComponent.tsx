import React from 'react';
import styled from 'styled-components';
import ThemeToggler from './Common/ThemeToggler';

import '../Styles/index.css';
import GlowInDarkButton from "./Common/GlowInDarkButton";


const HeaderContainer = styled.div`
    background-color: #242424;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: auto;
    position: fixed;
`;

const Header = styled.div`
    max-width: 1200px;
    display:flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`;

const Name = styled.div`
    color: #ffd32a;
    font-size: 30px;
    width: 280px;
    height: 40px;
    margin: 5px 10px;
    flex-basis: 50%;
    display: flex;
    align-items: center;
`;

const NavMenu = styled.div`
    display: flex;
    flex-basis: 50%;
    margin: 5px 10px;
    justify-content: flex-start;
    align-items: center;
`;
const NavItem = styled.div`
    color: #ffd32a;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
`;
const Link = styled.a`
    padding: 0px 30px;
    font-size: 30px;
`;
const DownloadCV = styled.button`
    color: #345234;
`;

const HeaderComponent = ({ theme, themeToggler }) => {
    return (
        <HeaderContainer>
            <Header>
                <Name>
                    Anshul Surana
                </Name>
                <NavMenu>
                    <NavItem>
                        <Link>About</Link>
                        <Link>Projects</Link>
                    </NavItem>
                    <GlowInDarkButton/>
                    <ThemeToggler toggleTheme={themeToggler} />
                </NavMenu>
            </Header>
        </HeaderContainer>
    );
}

export default HeaderComponent;
