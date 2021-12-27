import React from 'react';
import styled from 'styled-components';
const Logo= ()=>{
    return(
        <LogoContainer>
            <image src={require('../Assests/Images/edubBotLogo.gif')} alt="loading..." />
        </LogoContainer>
    )
}

export default Logo;
// Create a Title component that'll render an <h1> tag with some styles
const LogoContainer = styled.div`
  //max-width: 100%;
  //max-height: 100%;
  //border: 1px solid Red;
`;

const image = styled.img`
  //width: 100%;
  //height: auto;
`;
