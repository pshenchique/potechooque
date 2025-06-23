import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import * as THREE from "three";
import styled from "styled-components";

// Props interface
interface GLTFModelProps {
    modelPath: string;
    scale?: number | [number, number, number];
    position?: [number, number, number];
}

type GLTFResult = GLTF & {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
};

// Model loader
const Model: React.FC<GLTFModelProps> = ({ modelPath, scale, position }) => {
    const { scene } = useGLTF(modelPath) as GLTFResult;
    const ref = useRef<THREE.Group>(null);
    return <primitive ref={ref} object={scene} scale={scale || 1} position={position || [0, 0, 0]} />;
};

// Mouse-controlled camera
const MouseControlledCamera: React.FC = () => {
    const { camera, size } = useThree();

    useFrame(({ mouse }) => {
        // Map mouse X (-1 to 1) to camera X position (-2 to 2, or adjust range as needed)
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * -0.02, 0.02);
        // camera.position.y = THREE.MathUtils.lerp(camera.position.x, mouse.y * -0.2, 0.05);
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

// Final Component
const Model1: React.FC<GLTFModelProps> = (props) => {
    return (
        <StyledCanvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Stage environment="city" intensity={0.6}>
                <Model {...props} />
            </Stage>
            <MouseControlledCamera />
        </StyledCanvas>
    );
};

export default Model1;
