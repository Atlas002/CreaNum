import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader, MTLLoader } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";

const HumanModel = () => {
  const modelRef = useRef();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    // Load the material file
    mtlLoader.load("/skin.mtl", (materials) => {
      materials.preload();

      // Set the materials to the OBJ loader
      objLoader.setMaterials(materials);

      // Load the OBJ model and add it to the scene
      objLoader.load("/body.obj", (object) => {
        if (modelRef.current) {
          modelRef.current.add(object);
        }
      });
    });
  }, []);

  return <group ref={modelRef} />;
};

const HumanModelComponent = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <HumanModel />
      <OrbitControls />
    </Canvas>
  );
};

export default HumanModelComponent;
