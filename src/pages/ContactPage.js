import React from 'react'
import styled from 'styled-components';

const ContactPage = () => {
    return (
        <StyledContactPage>
            <Heading>Contact Page</Heading>
            <Content>
                <h1>👋 Allo! </h1>
                <p>Mon association <a href="http://www.le-septentrion.ca">Le Septentrion</a></p>
            </Content>
        </StyledContactPage>
    )
}

const StyledContactPage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: clamp(3rem, 5vw, 7vw);
    color: #eee;
    font-weight: 700;
    margin: 0;
    padding: 0;
`;

const Content = styled.div`
    color: #eee;
    font-size: clamp(1.5rem, 2vw, 4vw);
    a {
        color: skyblue;
        text-decoration: none;
    }
`;

export default ContactPage