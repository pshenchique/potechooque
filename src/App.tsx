import styled from "styled-components";
import Model1 from "./components/Model1";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectWindow from "./components/ProjectWindow";
import Shop from "./pages/Shop";
import BubbleHandler from "./pages/BubbleHandler";
import Info from "./pages/Info";
import { Thresholds } from "./Arrays";
import back from "./assets/back.png"

const modelUrl = `${import.meta.env.BASE_URL}models/m1.gltf`;

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

    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

function App() {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState(0);
    const [leftWindowOpen, setLeftWindowOpen] = useState(false);
    const [activeLeftWindowIndex, setActiveLeftWindowActive] = useState(0);

    const CameraMotion = useTransform(scrollYProgress, [0, 0.1], [100, 70]);
    const [cameraValue, setCameraValue] = useState(100);

    useEffect(() => {
        const unsubscribe = CameraMotion.on("change", (latest) => {
            setCameraValue(latest);
        });

        return () => unsubscribe(); // Clean up on unmount
    }, [CameraMotion]);

    useEffect(() => {
        const updateActiveSection = (progress: number) => {
            // Find the current section based on scroll progress
            const section = Thresholds.findIndex(
                (threshold, index) =>
                    progress >= threshold && (index === Thresholds.length - 1 || progress < Thresholds[index + 1])
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

                <AnimatePresence>
                    {leftWindowOpen && <ProjectWindow index={activeLeftWindowIndex} setIsActive={setLeftWindowOpen} />}

                    {activeSection !== 5 && activeSection !== 6 && !leftWindowOpen && (
                        <Model1 modelPath={modelUrl} z={cameraValue} />
                    )}

                    {activeSection === 1 && !leftWindowOpen && (
                        <BubbleHandler setIsActive={setLeftWindowOpen} setActiveIndex={setActiveLeftWindowActive} />
                    )}

                    {activeSection == 4 && <Shop />}

                    {activeSection == 5 && <Info />}
                </AnimatePresence>
            </FixedContent>
        </ScrollArea>
    );
}

export default App;
