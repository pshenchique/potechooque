import React from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Scene() {
    const gltf = useLoader(GLTFLoader, "../public/m1/m1.gltf");
    return <primitive object={gltf.scene} />;
}


export default function ThreeDeeView() {
  return (
      <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model url="../public/m1/m1.gltf" />
      </Canvas>
  );
}

