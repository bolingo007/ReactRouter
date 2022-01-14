import React from 'react'
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import { FaShip } from 'react-icons/fa';

const Toggle = ({handleNavToggle}) => {
    return (
        <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
            {/* <FaBars/> */}
            <FaShip/>
        </StyledToggle>
    )
}

const StyledToggle = styled.button`
    position: fixed;
    top: 5%;
    right: 4%;
    color: #222;
    background: #fde;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

export default Toggle