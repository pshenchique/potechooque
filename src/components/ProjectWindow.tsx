import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ArrowButton from "./ArrowButton";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

type ProjectWindowProps = {
    isActive: boolean;
    setIsActive: (state: boolean) => void;
};

const StyledContainer = styled(motion.div)`
    width: 80%;
    color: var(--color-dark);
    background-color: var(--color-grey);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const StyledInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 380px;
    padding-bottom: 300px;
    gap: 20px;
`;

const StyledHeader = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 24px;
    text-transform: uppercase;
`;

const StyledP = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 300;
    font-size: 12px;
    max-width: 450px;
`;

const variants = {
    on: { opacity: 1, transition: { duration: 0.5, ease: easeInOut, delay: 0.5 } },
    off: { opacity: 0, transition: { duration: 0.1, ease: easeInOut } },
};

const ProjectWindow: React.FC<ProjectWindowProps> = ({ isActive, setIsActive }: ProjectWindowProps) => {
    return (
        <StyledContainer
            initial={{ x: "-80vw" }}
            animate={{ x: 0, transition: { duration: 0.5, ease: easeInOut } }}
            exit={{ x: "-80vw", transition: { duration: 0.5, ease: easeInOut, delay: 0.5 } }}
        >
            <StyledInnerContainer>
                <BackButton onClick={() => setIsActive(false)} />
                <StyledHeader>похудожим со сквозь бабом</StyledHeader>
                <StyledP>
                    структура страницы: 1. Обложка: должна быть яркой, большой заголовок, использование 3д элементом. 2.
                    короткий текст про студию. 3. портфолио съемочных проектов с ярким представлением. проекты поделены
                    на категории кино, реклама, клипы, другое. при наведении на проект можно перейти к нему и увидеть
                    ссылку
                </StyledP>
                <AnimatePresence>
                    <motion.div variants={variants} initial="off" animate={isActive ? "on" : "off"}>
                        <ArrowButton />
                        <ArrowButton back />
                    </motion.div>
                </AnimatePresence>
            </StyledInnerContainer>
        </StyledContainer>
    );
};

export default ProjectWindow;
