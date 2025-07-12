import styled from "styled-components";
import ModelHandler from "./components/ModelHandler";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectWindow from "./components/ProjectWindow";
import Shop from "./pages/Shop";
import BubbleHandler from "./pages/BubbleHandler";
import Info from "./pages/Info";
import { Thresholds } from "./Arrays";
import back from "./assets/back.png";
import ModelHandler2 from "./components/ModelHandler2";
import ModelHandler3 from "./components/ModelHandler3";

const modelPrefix = `${import.meta.env.BASE_URL}models/`;

const ScrollArea = styled.div`
    height: 700vh;
`;

const FixedContent = styled(motion.div)`
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
    const [leftWindowIsSet, setLeftWindowIsSet] = useState(true);
    const [activeLeftWindowIndex, setActiveLeftWindowActive] = useState(0);

    const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const CameraMotion = useTransform(scrollYProgress, [0, 0.1], [100, 70]);
    const [cameraValue, setCameraValue] = useState(100);

    const CameraMotion2 = useTransform(scrollYProgress, [Thresholds[4], Thresholds[4] + 0.05], [40, 70]);
    const [cameraValue2, setCameraValue2] = useState(40);

    useEffect(() => {
        const unsubscribe = CameraMotion.on("change", (latest) => {
            setCameraValue(latest);
        });

        return () => unsubscribe(); // Clean up on unmount
    }, [CameraMotion]);

    useEffect(() => {
        const unsubscribe = CameraMotion2.on("change", (latest) => {
            setCameraValue2(latest);
        });

        return () => unsubscribe(); // Clean up on unmount
    }, [CameraMotion2]);

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
            <FixedContent style={{ backgroundPositionX: bgX, backgroundPositionY: "center" }}>
                <Navbar isActive={activeSection} setIsActive={setActiveSection} isWindowActive={leftWindowOpen} />

                <AnimatePresence>
                    {leftWindowOpen && (
                        <ProjectWindow
                            index={activeLeftWindowIndex}
                            setIsActive={setLeftWindowOpen}
                            isSetWorks={leftWindowIsSet}
                        />
                    )}

                    {activeSection !== 5 &&
                        activeSection !== 6 &&
                        !leftWindowOpen &&
                        (activeSection < 2 ? (
                            <ModelHandler modelPath={modelPrefix + "m1.gltf"} z={cameraValue} />
                        ) : activeSection < 4 ? (
                            <ModelHandler2 modelPath={modelPrefix + "m2.gltf"} z={cameraValue} />
                        ) : (
                            <ModelHandler3 modelPath={modelPrefix + "m3.gltf"} z={cameraValue2} />
                        ))}

                    {(activeSection === 1 || activeSection === 2 || activeSection === 3)  && !leftWindowOpen && (
                        <BubbleHandler
                            setIsActive={setLeftWindowOpen}
                            setActiveIndex={setActiveLeftWindowActive}
                            setLeftWindowToSet={setLeftWindowIsSet}
                            isLeftWindowSet={activeSection === 1}
                        />
                    )}

                    {activeSection == 4 && cameraValue2 > 65 && <Shop />}

                    {activeSection == 5 && <Info />}
                </AnimatePresence>
            </FixedContent>
        </ScrollArea>
    );
}

export default App;
