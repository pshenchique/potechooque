import React from "react";
import ItemFrame from "./ItemFrame";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`
const HStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const ItemName = styled.h1`
    font-family: "Korakatski";
    text-transform: uppercase;
    font-weight: 800;
    font-style: normal;
    color: var(--color-light);
    font-size: 32px;
`;

const ItemPrice = styled.h1`
    font-family: "Korakatski";
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
    color: var(--color-primary);
    font-size: 40px;
    text-shadow: 0px 4px 4px #2d26265a;
`;

const Shop = () => {
    return (
        <StyledContainer>
            <HStack>
                <ItemName>карабин</ItemName>
                <ItemFrame />
                <ItemPrice>800р</ItemPrice>
            </HStack>
        </StyledContainer>
    );
};

export default Shop;
