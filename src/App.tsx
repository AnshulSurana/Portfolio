import React, { useState } from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { lightTheme, darkTheme } from "./Styles/Themes";
import  { useDarkMode } from "./hooks/useDarkMode";
import './Styles/App.css';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if(!mountedComponent) return <div/>
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
            <div className="App">
                <HeaderComponent theme={theme} themeToggler={themeToggler} />
                <Body />
                <FooterComponent />
            </div>
        </ThemeProvider>
    );
}

export default App;
