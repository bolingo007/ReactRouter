import React from 'react'
import styled from 'styled-components';

const ContactPage = () => {
    return (
        <StyledContactPage>
            <Heading>La vraie bataille navale se passe ici</Heading>
            <Content>
                <h1>&#128075;&#127999; Allo! &#128512;</h1>
                <p>Moi c'est Bertin Mouya Madi</p>
                <p>Mon association est <a href="http://www.le-septentrion.ca">Le Septentrion</a></p>
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
    font-size: clamp(1rem, 2vw, 7vw);
    color: #eee;
    font-weight: 70;
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