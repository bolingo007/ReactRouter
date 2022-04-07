import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <div className="test">
        <StyledHomePage>
            <Heading className="animate__animated animate__fadeInLeft"><div>Battleship</div></Heading>
            <div>
            <h1>Bataille navale</h1>
            <p>Ce jeu n'est pas encore terminé. </p>
            <p>Il faut faire un contexte de jeu qui marche bien. </p>
            <p>Il faut ajouter des sockets pour permettre à deux personnes de jouer. </p>
            <p>C'est un projet intéressant que je terminerai pendant mes vacances.</p>
            <p>Je travaillerai dessus de temps en temps pour ajouter les parties manquantes</p>
            <p>Pour le moment &#128704;&#127999;</p>
             </div>
            
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