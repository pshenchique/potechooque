import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import BubblePlayer from "./BubblePlayer"; // Adjust path as needed
import { useMemo } from "react";
import styled from "styled-components";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type BubbleHandlerProps = {
    isActive: boolean;
    setIsActive: (state: boolean) => void;
};

const MotionContainer = styled(motion.div)`
    width: fit-content;
    position: absolute;
`;

const StyledHeader = styled.p<{ font: string; scale: number; caps: string; top: number }>`
    color: var(--color-light);
    font-size: ${(props) => props.scale}px;
    font-family: ${(props) => props.font}, sans-serif;
    text-transform: ${(props) => (props.caps === "all" ? "uppercase" : "capitalize")};
    position: absolute;
    top: ${(props) => props.top}px;
    z-index: -2;
    user-select: none;
`;

const BubbleHandler: React.FC<BubbleHandlerProps> = ({ isActive, setIsActive }: BubbleHandlerProps) => {
    const bubbles = useMemo(() => {
        return Array.from({ length: 10 }, (_, i) => ({
            id: i,
            scale: getRandomInt(7, 10),
            border: getRandomInt(10, 40),
            top: getRandomInt(10, 700),
            duration: getRandomInt(15, 25), // Speed of movement
            delay: getRandomInt(0, 50),
        }));
    }, []);

    const names = useMemo(() => {
        return [
            {
                id: 0,
                name: "пoчучуть",
                font: "Comediant Script",
                caps: "first",
                scale: 128,
                top: 100,
                duration: getRandomInt(15, 25),
                delay: 2,
            },
            {
                id: 1,
                name: "пoчучуть",
                font: "Playfair Display",
                caps: "all",
                scale: 64,
                top: 300,
                duration: getRandomInt(15, 25),
                delay: 10,
            },
            {
                id: 2,
                name: "похудожим",
                font: "Undertale Battle Font",
                caps: "all",
                scale: 150,
                top: 600,
                duration: getRandomInt(15, 25),
                delay: 0,
            },
            {
                id: 3,
                name: "клипы",
                font: "Rimma Sans",
                caps: "all",
                scale: 96,
                top: 350,
                duration: getRandomInt(15, 25),
                delay: 20,
            },
            {
                id: 4,
                name: "реклама",
                font: "Miama Nueva",
                caps: "first",
                scale: 64,
                top: 550,
                duration: getRandomInt(15, 25),
                delay: 15,
            },
        ];
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {names.map(({ id, scale, top, duration, delay, font, caps, name }) => (
                <MotionContainer
                    key={id}
                    initial={{ left: "100vw" }}
                    animate={{ left: "-40vw" }}
                    transition={{ duration, delay, repeat: Infinity }}
                >
                    <StyledHeader scale={scale} top={top} font={font} caps={caps}>
                        {name}
                    </StyledHeader>
                </MotionContainer>
            ))}

            {bubbles.map(({ id, scale, border, top, duration, delay }) => (
                <MotionContainer
                    key={id}
                    initial={{ left: "100vw" }}
                    animate={{ left: "-40vw" }}
                    transition={{ duration, delay, repeat: Infinity }}
                >
                    <BubblePlayer scale={scale} border={border} top={top} onClick={()=>{setIsActive(true)}}/>
                </MotionContainer>
            ))}
        </motion.div>
    );
};

export default BubbleHandler;
