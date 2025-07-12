import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import ArrowButton from "./ArrowButton";
import { AnimatePresence, motion, easeInOut, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DirWorks, SetWorks } from '../Arrays';
import { getRandomInt } from "../utils";

type ProjectWindowProps = {
    isSetWorks?: boolean
    index: number;
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
    justify-content: start;
`;

const StyledInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-left: 380px;
    padding-top: 30vh;
    gap: 20px;
`;

const StyledHeader = styled.div`
    font-family: "Korakatski", sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 24px;
    text-transform: uppercase;
    z-index: 50;
`;

const StyledP = styled.h1`
    font-family: "Korakatski", sans-serif;
    font-weight: 300;
    font-size: 12px;
    max-width: 450px;
    z-index: 50;
`;

const RandomImage = styled(motion.img)<{ top: number; right: number }>`
    position: absolute;
    top: ${(props) => props.top}%;
    right: ${(props) => props.right}%;
    perspective: 200;
    transform-style: preserve-3d;
`;

const variants = {
    on: { opacity: 1, transition: { duration: 0.5, ease: easeInOut, delay: 0.5 } },
    off: { opacity: 0, transition: { duration: 0.1, ease: easeInOut } },
};


const prefix = `${import.meta.env.BASE_URL}`;

const ProjectWindow: React.FC<ProjectWindowProps> = ({ isSetWorks = false, index, setIsActive }: ProjectWindowProps) => {
    const activeList = isSetWorks ? SetWorks : DirWorks

    const [activeIndex, setActiveIndex] = useState(index);
    

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;

            const x = e.clientX / innerWidth - 0.5;
            const y = e.clientY / innerHeight - 0.5;

            rotateX.set(y * 20); // intensity
            rotateY.set(x * -20);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [rotateX, rotateY]);

    return (
        <StyledContainer
            initial={{ x: "-80vw" }}
            animate={{ x: 0, transition: { duration: 0.5, ease: easeInOut } }}
            exit={{ x: "-80vw", transition: { duration: 0.5, ease: easeInOut } }}
        >
            <StyledInnerContainer>
                {activeList[activeIndex].images.map((item: string, index: string | number) => (
                    <RandomImage
                        top={activeList[activeIndex].top[index]}
                        right={activeList[activeIndex].right[index]}
                        src={prefix + item}
                        animate={{
                            x: [-5, 5, -5],
                            y: [-5, 5, -5],
                        }}
                        transition={{
                            duration: getRandomInt(200, 300) / 100,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ rotateX, rotateY }}
                    />
                ))}
                <BackButton onClick={() => setIsActive(false)} />
                <StyledHeader>
                    <span> {activeList[activeIndex].pre+" "} </span>
                    <span style={{ color: activeList[activeIndex].color }}>{activeList[activeIndex].name}</span>
                </StyledHeader>
                <StyledP>{activeList[activeIndex].description}</StyledP>
                <AnimatePresence>
                    <motion.div key="arrow-buttons" variants={variants} initial="off" animate="on" exit="off">
                        {activeIndex < activeList.length - 1 && (
                            <ArrowButton onClick={() => setActiveIndex(activeIndex + 1)} />
                        )}
                        {activeIndex > 0 && <ArrowButton back onClick={() => setActiveIndex(activeIndex - 1)} />}
                    </motion.div>
                </AnimatePresence>
            </StyledInnerContainer>
        </StyledContainer>
    );
};

export default ProjectWindow;
