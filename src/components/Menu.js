import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Menu = ({handleNavToggle}) => {
    return (
         <StyledMenu>
            <StyledLink onClick={handleNavToggle} to="/">Home</StyledLink>
            <StyledLink onClick={handleNavToggle} to="/contact">Contact Page</StyledLink>
            <StyledLink onClick={handleNavToggle} to="/jeu">jeu Battleship</StyledLink>
            <StyledLink onClick={handleNavToggle} to="/propos">À propos Page</StyledLink>
            <StyledLink onClick={handleNavToggle} to="/login">Connexion</StyledLink>
            <CloseToggle onClick={handleNavToggle}><FaTimes/></CloseToggle>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px) {
        width: 60%;
    }
    background-color: rgb(58, 66, 81, .9);
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: #eee;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    &:hover {
        transition: .2s all ease-in-out;
        color: orangered;
    }
`;

const CloseToggle = styled.button`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

export default Menu