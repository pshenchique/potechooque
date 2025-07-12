import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import BubblePlayer from "../components/BubblePlayer"; // Adjust path as needed
import { useMemo } from "react";
import styled from "styled-components";
import { DirBubbles, DirLeftWindowNames, SetBubbles, SetLeftWindowNames } from "../Arrays";

type BubbleHandlerProps = {
    setIsActive: (state: boolean) => void;
    setActiveIndex: (index: number) => void;
    setLeftWindowToSet: (state: boolean) => void;
    isLeftWindowSet: boolean
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

const BubbleHandler: React.FC<BubbleHandlerProps> = ({ setIsActive, setActiveIndex, setLeftWindowToSet, isLeftWindowSet }: BubbleHandlerProps) => {

    const names = useMemo(() => {
        return isLeftWindowSet ? SetLeftWindowNames : DirLeftWindowNames;
    }, [isLeftWindowSet]);

    const CurrentBubbles = isLeftWindowSet ? SetBubbles : DirBubbles

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

            {CurrentBubbles.map((bubble, index) => (
                <MotionContainer
                    key={index}
                    initial={{ left: "100vw" }}
                    animate={{ left: "-40vw" }}
                    transition={{ duration: bubble.duration, delay: bubble.delay, repeat: Infinity }}
                >
                    <BubblePlayer
                        image={bubble.gif}
                        scale={bubble.scale}
                        border={bubble.border}
                        top={bubble.top}
                        onClick={() => {
                            setIsActive(true);
                            setActiveIndex(Math.floor(index / 2));
                            setLeftWindowToSet(isLeftWindowSet);
                        }}
                    />
                </MotionContainer>
            ))}
        </motion.div>
    );
};

export default BubbleHandler;
