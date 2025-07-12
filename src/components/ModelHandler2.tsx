import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInOut } from "../Arrays";

// Props interface
type GLTFModelProps = {
    modelPath: string;
    z: number;
};

type ModelProps = {
    modelPath: string;
    z: number;
};

type GLTFResult = {
    scene: THREE.Group;
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
};

const Model: React.FC<ModelProps> = ({ modelPath, z }) => {
    const { scene } = useGLTF(modelPath) as GLTFResult;
    const ref = useRef<THREE.Group>(null);

    return <primitive ref={ref} object={scene} scale={1} position={[0, 0, 0]} />;
};

const MouseControlledCamera: React.FC = () => {
    const { camera } = useThree();

    useFrame(({ mouse }) => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.1);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * -2, 0.1);
        camera.lookAt(0, 0, 0);
    });

    return null;
};

const StyledCanvas = styled(Canvas)`
    height: 100vh;
    width: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
`;

const StyledMotionContainer = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: absolute !important;
    top: 0;
    left: 0;

`;

const ModelHandler2: React.FC<GLTFModelProps> = ({ modelPath, z }) => {
    return (
        <StyledMotionContainer {...fadeInOut}>
            <StyledCanvas>
                <PerspectiveCamera makeDefault fov={50} position={[0, 0, 80]} />
                <Stage adjustCamera={false}>
                    <Model modelPath={modelPath} z={z} />
                </Stage>
                <MouseControlledCamera />
            </StyledCanvas>
        </StyledMotionContainer>
    );
};

export default ModelHandler2;
