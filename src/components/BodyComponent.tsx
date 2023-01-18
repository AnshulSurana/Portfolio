import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Icon from '!svg-react-loader?name=Icon!../assets/first.svg';
// @ts-ignore
import linkedln from '!svg-react-loader?name=Icon!../assets/linkedln2.svg';
// @ts-ignore
import Lines from '!svg-react-loader?name=Lines!../assets/second.svg';
// @ts-ignore
import Logo from '!svg-react-loader?name=Logo!../assets/logo.svg';
// @ts-ignore
import HtmlLogo from '!svg-react-loader?name=HtmlLogo!../assets/html.svg';
// @ts-ignore
import CssLogo from '!svg-react-loader?name=cssLogo!../assets/css.svg';
// @ts-ignore
import JsLogo from '!svg-react-loader?name=cssLogo!../assets/js.svg';
// @ts-ignore
import ReactLogo from '!svg-react-loader?name=ReactLogo!../assets/react.svg';
// @ts-ignore
import WebpackLogo from '!svg-react-loader?name=WebpackLogo!../assets/webpack.svg';
// @ts-ignore
import SvgLogo from '!svg-react-loader?name=SvgLogo!../assets/svglogo.svg';

import MorphComponent from "./Common/morphComponent";
import WatchComponent from "./Common/WatchComponent";
import AboutComponent from "./AboutComponent";
import TypingComponent from "./Common/TypingComponent";

const BodyContainer = styled.div`
    background-color: ${({ theme }) => theme.body};
`;

const GridComponent = styled.div`
    display: block;
`;
const FlexComponent = styled.div`
    display: flex;
    margin-right: auto;
    align-items: center;
    max-width: 1200px;
    height: 95vh;
    margin-left: auto;
`;

const GridRow = styled.div`
   margin: 10px;
   margin-top: 8vh;
`;

const GridColumn = styled.div`
    display: flex;
    margin: 10px;
`;

const G1R1 = styled.div`
    background-color: #ea8685;
    height: 20vh;
    width: 25vw;
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    color: #1b1b1b;
    font-size: 70px;
    letter-spacing: 0px;
    line-height: 110px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
`;
const G2R1 = styled.div`
    background-color: #7bed9f;
    height: 20vh;
    width: 10vw;
    margin: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;
const G3R1 = styled.div`
    background-color: #70a1ff;
    height: 20vh;
    width: 25vw;
    margin: 10px;
    text-align: center;
    display: flex;
    align-items: center;
`;

const G1R2 = styled.div`
    background-color: #ff4757;
    height: 20vh;
    margin-left: 10px;
    margin-right: 10px;
    width: 20vw;
    text-align: center;
`;
const G2R2 = styled.div`
    background-color: #eccc68;
    height: 20vh;
    width: 25vw;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    color: #1b1b1b;
    font-size: 70px;
    letter-spacing: 0px;
    line-height: 110px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
`;
const G3R2 = styled.div`
    background-color: #82589F;
    height: 20vh;
    width: 15vw;
    margin-left: 10px;
    text-align: center;
    display: flex;
    align-items: center;
`;
const G1R3 = styled.div`
    background-color: #55E6C1;
    height: 20vh;
    width: 15vw;
    margin: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const G2R3 = styled.div`
    background-color: #e55039;
    height: 20vh;
    width: 20vw;
    margin: 10px;
    text-align: center;
`;

const G3R3 = styled.div`
    background-color: #3dc1d3;
    height: 20vh;
    width: 25vw;
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    color: #1b1b1b;
    font-size: 70px;
    letter-spacing: 0px;
    line-height: 110px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
`;

const IconStyle = styled(Icon)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;

const HtmlStyle = styled(HtmlLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;

const CssStyle = styled(CssLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;

const JsStyle = styled(JsLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;
const WebpackStyle = styled(WebpackLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;

const SvgStyle = styled(SvgLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    width: 4vw;
`;

const LinkedlnStyle = styled(linkedln)`
    margin-left: auto;
    margin-right: auto;
    height: 20vh;
    width: 6vw;
`;

const LinesStyle = styled(Lines)`
    margin-left: auto;
    margin-right: auto;
    height: 18vh;
    padding: 5px;
`;

const LogoStyle = styled(Logo)`
    margin-left: auto;
    margin-right: auto;
    height: 18vh;
`;
const ReactStyle = styled(ReactLogo)`
    margin-left: auto;
    margin-right: auto;
    height: 18vh;
    width: 4vw;
    padding: 5px;
`;

const ScanComponent = styled.div`
    color: #1e272e;
    font-weight: bold;
`;

const BodyComponent = () => {
    return (
        <BodyContainer>
            <GridComponent>
                <FlexComponent>
                    <GridRow>
                        <GridColumn>
                            <G1R1>
                                DESIGN
                            </G1R1>
                            <G2R1>
                                <LinkedlnStyle />
                                <ScanComponent>Scan Me!</ScanComponent>
                            </G2R1>
                            <G3R1>
                                <TypingComponent />
                            </G3R1>
                        </GridColumn>
                        <GridColumn>
                            <G1R2>
                                <WatchComponent />
                            </G1R2>
                            <G2R2>
                                UX-UI
                            </G2R2>
                            <G3R2>
                                <HtmlStyle />
                                <CssStyle />
                                <JsStyle />
                                <ReactStyle />
                                <WebpackStyle />
                                <SvgStyle />
                            </G3R2>
                        </GridColumn>
                        <GridColumn>
                            <G1R3>
                                <MorphComponent />
                            </G1R3>
                            <G2R3>
                                <LinesStyle />
                            </G2R3>
                            <G3R3>
                                REACT
                            </G3R3>
                    </GridColumn>
                    </GridRow>
                </FlexComponent>
            </GridComponent>
            <AboutComponent />
        </BodyContainer>
    );
}

export default BodyComponent;
