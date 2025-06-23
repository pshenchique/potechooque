import styled from "styled-components";
import Model1 from "./components/Model1";
import Navbar from "./components/Navbar";
import BubbleHandler from "./components/BubbleHandler";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectWindow from "./components/ProjectWindow";
import Shop from "./components/Shop";

const ScrollArea = styled.div`
    height: 500vh;
`;

const FixedContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    background-image: url("back.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

function App() {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState(0);
    const [leftWindowOpen, setLeftWindowOpen] = useState(false);

    useEffect(() => {
        const thresholds = [0, 0.1, 0.3, 0.5, 0.6, 0.8];

        const updateActiveSection = (progress: number) => {
            // Find the current section based on scroll progress
            const section = thresholds.findIndex(
                (threshold, index) =>
                    progress >= threshold && (index === thresholds.length - 1 || progress < thresholds[index + 1])
            );
            setActiveSection(section >= 0 ? section : 0);
            // console.log("scroll %: " + progress + ", section: " + section)
        };

        const unsubscribe = scrollYProgress.on("change", updateActiveSection);

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <ScrollArea>
            <FixedContent>
                <Navbar isActive={activeSection} setIsActive={setActiveSection} isWindowActive={leftWindowOpen} />

                {/* <AnimatePresence>
                    {leftWindowOpen && <ProjectWindow isActive={leftWindowOpen} setIsActive={setLeftWindowOpen} />}
                </AnimatePresence>

                <AnimatePresence>
                    {(activeSection === 1 || activeSection === 0) && !leftWindowOpen && (
                        <Model1 modelPath={"/m1/m1.gltf"} scale={[1, 1, 1]} position={[0, 0, 0]} />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {activeSection === 1 && !leftWindowOpen && (
                        <BubbleHandler isActive={leftWindowOpen} setIsActive={setLeftWindowOpen} />
                    )}
                </AnimatePresence> */}

                <Shop />
            </FixedContent>
        </ScrollArea>
    );
}

export default App;
