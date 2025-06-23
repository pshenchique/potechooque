import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ArrowButton from "./ArrowButton";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import b from "../assets/shop/b.png";
import i1 from "../assets/shop/1.jpg";

type ShopWindowProps = {
    isActive: boolean;
    setIsActive: (state: boolean) => void;
};

const StyledContainer = styled.div`
    width: 80%;
    color: var(--color-dark);
    background-color: var(--color-grey);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StyledInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 300px;
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
    on: { opacity: 1, transition: { duration: 0.5, ease: easeInOut, delay: 0.5 } },
    off: { opacity: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const ShopWindowProps: React.FC<ShopWindowProps> = ({ isActive, setIsActive }: ShopWindowProps) => {
    return (
        <StyledOuterContainer
            initial={{ x: "80vw" }}
            animate={{ x: 0, transition: { duration: 0.5, ease: easeInOut } }}
            exit={{ x: "80vw", transition: { duration: 0.5, ease: easeInOut } }}
        >
            <BackButton onClick={() => setIsActive(false)} shop />
            <StyledContainer>
                <img src={i1} />
                <StyledInnerContainer>
                    <StyledHeader>Карабин</StyledHeader>
                    <StyledPrice>900р</StyledPrice>
                    <StyledP>
                        структура страницы: 1. Обложка: должна быть яркой, большой заголовок, использование 3д
                        элементом. 2. короткий текст про студию. 3. портфолио съемочных проектов с ярким представлением.
                        проекты поделены на категории кино, реклама, клипы, другое. при наведении на проект можно
                        перейти к нему и увидеть ссылку
                    </StyledP>
                    <BuyButton>
                        <img src={b} />
                        <h1>купить</h1>
                    </BuyButton>
                    <motion.div key="arrow-buttons" variants={variants} initial="off" animate="on" exit="off">
                        <ArrowButton />
                        <ArrowButton back />
                    </motion.div>
                </StyledInnerContainer>
            </StyledContainer>
        </StyledOuterContainer>
    );
};

export default ShopWindowProps;
