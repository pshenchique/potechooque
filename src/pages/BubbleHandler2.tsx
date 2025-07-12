// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import BubblePlayer from "../components/BubblePlayer"; // Adjust path as needed
// import { useMemo } from "react";
// import styled from "styled-components";
// import { getRandomInt } from "../utils";
// import { Bubbles, Bubbles2 } from "../Arrays";

// type BubbleHandlerProps = {
//     setIsActive: (state: boolean) => void;
// };

// const MotionContainer = styled(motion.div)`
//     width: fit-content;
//     position: absolute;
// `;

// const StyledHeader = styled.p<{ font: string; scale: number; caps: string; top: number }>`
//     color: var(--color-light);
//     font-size: ${(props) => props.scale}px;
//     font-family: ${(props) => props.font}, sans-serif;
//     text-transform: ${(props) => (props.caps === "all" ? "uppercase" : "capitalize")};
//     position: absolute;
//     top: ${(props) => props.top}px;
//     z-index: -2;
//     user-select: none;
// `;

// const BubbleHandler2: React.FC<BubbleHandlerProps> = ({ setIsActive }: BubbleHandlerProps) => {

//     const names = useMemo(() => {
//         return [
//             {
//                 id: 0,
//                 name: "пoчучуть",
//                 font: "Comediant Script",
//                 caps: "first",
//                 scale: 128,
//                 top: 100,
//                 duration: getRandomInt(15, 25),
//                 delay: 2,
//             },
//             {
//                 id: 1,
//                 name: "пoчучуть",
//                 font: "Playfair Display",
//                 caps: "all",
//                 scale: 64,
//                 top: 300,
//                 duration: getRandomInt(15, 25),
//                 delay: 10,
//             },
//             {
//                 id: 2,
//                 name: "похудожим",
//                 font: "Undertale Battle Font",
//                 caps: "all",
//                 scale: 150,
//                 top: 600,
//                 duration: getRandomInt(15, 25),
//                 delay: 0,
//             },
//             {
//                 id: 3,
//                 name: "клипы",
//                 font: "Rimma Sans",
//                 caps: "all",
//                 scale: 96,
//                 top: 350,
//                 duration: getRandomInt(15, 25),
//                 delay: 20,
//             },
//             {
//                 id: 4,
//                 name: "реклама",
//                 font: "Miama Nueva",
//                 caps: "first",
//                 scale: 64,
//                 top: 550,
//                 duration: getRandomInt(15, 25),
//                 delay: 15,
//             },
//         ];
//     }, []);

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             {names.map(({ id, scale, top, duration, delay, font, caps, name }) => (
//                 <MotionContainer
//                     key={id}
//                     initial={{ left: "100vw" }}
//                     animate={{ left: "-40vw" }}
//                     transition={{ duration, delay, repeat: Infinity }}
//                 >
//                     <StyledHeader scale={scale} top={top} font={font} caps={caps}>
//                         {name}
//                     </StyledHeader>
//                 </MotionContainer>
//             ))}

//             {Bubbles2.map((bubble, index) => (
//                 <MotionContainer
//                     key={index}
//                     initial={{ left: "100vw" }}
//                     animate={{ left: "-40vw" }}
//                     transition={{ duration: bubble.duration, delay: bubble.delay, repeat: Infinity }}
//                 >
//                     <BubblePlayer
//                     image={bubble.gif}
//                         scale={bubble.scale}
//                         border={bubble.border}
//                         top={bubble.top}
//                         onClick={() => {
//                             setIsActive(true);
//                         }}
//                     />
//                 </MotionContainer>
//             ))}
//         </motion.div>
//     );
// };

// export default BubbleHandler2;
