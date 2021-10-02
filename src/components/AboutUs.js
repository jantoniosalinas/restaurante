import React, { useRef } from 'react'
import styled from 'styled-components';

const AboutUs = ({children}) => {
    const aboutShow = useRef(null);
    return (
        <MainContainer>
            <AboutContainer ref={aboutShow}>
                {children}
            </AboutContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
      position: relative;
`; 

const AboutContainer = styled.div`
      display: flex;
      flex-wrap: nowrap;
`;

export default AboutUs;
