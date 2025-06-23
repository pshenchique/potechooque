import React from "react";
import styled from "styled-components";

type BackButtonProps = {
    onClick: () => void;
    shop?: boolean;
};

const StyledButton = styled.div<{ shop: boolean }>`
    height: fit-content;
    border-radius: 50px;
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    font-family: "Comediant Script", serif;
    background-color: ${(props) => (props.shop ? "transperent" : "var(--color-light)")};
    ${(props) => props.shop && "margin-top: 160px"};
    ${(props) => props.shop && "margin-right: 20px"};
    padding: 0px 20px;
    font-size: 32px;
    cursor: pointer;
    user-select: none;
    margin-bottom: 80px;

    &:hover {
        color: var(--color-secondary-darker);
        border: 1px solid var(--color-secondary-darker);
        transform: scale(1.1);
    }

    &:active {
        color: var(--color-secondary-darker);
        background-color: var(--color-secondary);
        border: 1px solid var(--color-secondary-darker);
        transform: scale(0.9);
    }

    transition:
        color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        border 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const BackButton: React.FC<BackButtonProps> = ({ onClick, shop=false }: BackButtonProps) => {
    return <StyledButton shop={shop} onClick={onClick}>Назад</StyledButton>;
};

export default BackButton;
