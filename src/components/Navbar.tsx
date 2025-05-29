import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    height: 100svh;
    width: 100px;
    margin-left: 50px;
`;

const MenuItem = styled.p<{ clicked?: boolean }>`
    font-family: Korakatski, sans-serif;
    text-transform: uppercase;
    writing-mode: vertical-rl; /* Rotates text 90 degrees */
    transform: rotate(180deg); /* Adjusts orientation for readability */
    text-align: center;
    font-size: 13px;

    font-weight: ${(props) => (props.clicked ? "bold" : "normal")};
    color: ${(props) => (props.clicked ? "#C1F55F" : "white")};

    &:hover {
        color: ${(props) => (props.clicked ? "#C1F55F" : "#f582b2")};
        cursor: pointer;
    }

    &:active {
        color: ${(props) => (props.clicked ? "#C1F55F" : "#e93f88")};
        transform: scale(0.85) rotate(180deg);
        cursor: pointer;
    }

    transition:
        color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.1s cubic-bezier(0.22, 1, 0.36, 1); /* springy */
`;

export default function Navbar() {
    const [isActive, setIsActive] = useState(0);

    const buttons = [
        "похудожим",
        <>
            режиссура
            <br />
            арт-дирекшн
        </>,
        "мерч",
        "о нас",
    ];
    return (
        <MenuContainer>
            <img src={logo} />
            {buttons.map((button, index) => (
                <MenuItem key={index} onClick={() => setIsActive(index)} clicked={index == isActive}>
                    {button}
                </MenuItem>
            ))}
        </MenuContainer>
    );
}
