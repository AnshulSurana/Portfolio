import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: block;
    height: 20vh;
    background-color: ${({ theme }) => theme.body};
`;

const FooterComponent = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    );
}

export default FooterComponent;
