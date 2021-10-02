import React, { useRef }  from 'react';
import styled from 'styled-components';

const Tiles = ({children}) => {
    const tilesShow = useRef(null);
    return (
        <MainContainer>
            <TilesContainer ref={tilesShow}>
                {children}
            </TilesContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
      position: relative;
`; 

const TilesContainer = styled.div`
      display: flex;
      flex-wrap: nowrap;
`;

export default Tiles;
