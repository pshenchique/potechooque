import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ArrowButton from "./ArrowButton";
import { motion, easeInOut } from "framer-motion";
import tape from "../assets/shop/tape.png";
import { ShopItems } from "../Arrays";

type ShopWindowProps = {
    setIsActive: (state: boolean) => void;
    index: number;
};

const StyledContainer = styled.div`
    width: 80%;
    color: var(--color-dark);
    background-color: var(--color-grey);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;
    gap: 40px;
`;

const StyledInnerContainer = styled.div`
flex-grow: 1;
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const StyledOuterContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: start;
    gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
`;

const StyledHeader = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 24px;
    text-transform: uppercase;
`;

const StyledPrice = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 64px;
`;

const StyledP = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 300;
    font-size: 12px;
    max-width: 450px;
`;

const StyledImage = styled.img<{ hasMain: boolean }>`
    height: 100%;
    width: 40vw;
    object-fit: ${(props) => (props.hasMain ? "contain" : "cover")};
`;

const BuyButton = styled.div`
    font-family: "Korakatski", sans-serif;
    font-weight: 800;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    user-select: none;
    cursor: pointer;

    h1,
    img {
        position: absolute;
        transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
        transform: scale(1.1);

        h1 {
            transform: scale(0.8);
        }
    }

    &:active {
        transform: scale(0.9);

        h1 {
            transform: scale(1.2);
        }
    }

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const variants = {
    on: { opacity: 1, transition: { duration: 0.5, ease: easeInOut } },
    off: { opacity: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const ShopWindowProps: React.FC<ShopWindowProps> = ({ setIsActive, index }: ShopWindowProps) => {
    const [activeIndex, setActiveIndex] = useState(index);

    return (
        <StyledOuterContainer
            initial={{ x: "80vw" }}
            animate={{ x: 0 }}
            exit={{ x: "80vw" }}
            transition={{ duration: 0.5, ease: easeInOut }}
        >
            <BackButton onClick={() => setIsActive(false)} shop />
            <StyledContainer>
                <StyledImage
                    src={ShopItems[activeIndex].image_main ?? ShopItems[activeIndex].image_small}
                    hasMain={ShopItems[activeIndex].image_main === undefined}
                />
                <StyledInnerContainer>
                    <StyledHeader>{ShopItems[activeIndex].name}</StyledHeader>
                    <StyledPrice>{ShopItems[activeIndex].price}р</StyledPrice>
                    <StyledP>{ShopItems[activeIndex].description}</StyledP>
                    <BuyButton>
                        <img src={tape} />
                        <h1>купить</h1>
                    </BuyButton>
                    <motion.div key="arrow-buttons" variants={variants} initial="off" animate="on" exit="off">
                        {activeIndex < ShopItems.length - 1 && (
                            <ArrowButton onClick={() => setActiveIndex(activeIndex + 1)} />
                        )}
                        {activeIndex > 0 && <ArrowButton back onClick={() => setActiveIndex(activeIndex - 1)} />}
                    </motion.div>
                </StyledInnerContainer>
            </StyledContainer>
        </StyledOuterContainer>
    );
};

export default ShopWindowProps;
