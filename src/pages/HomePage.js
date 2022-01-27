import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <div className="test">
        <StyledHomePage>
            <Heading className="animate__animated animate__fadeInLeft"><div>Battleship</div></Heading>
            
        </StyledHomePage>
        </div>
    )
}

const StyledHomePage = styled.div`
    // min-height: 20vh;
    // width: 20vw;
    // //- background-color: #d4f1f9;
    // display: flex;
    // text-align: right;
    // flex-direction: column; 
    // justify-content: center;
    // align-items: center;
`;

const Heading = styled.h1`
    font-size: clamp(3rem, 5vw, 7vw);
    color: #282c34;
    font-weight: 700;
    margin: 0;
    padding: 0;
`;

export default HomePage