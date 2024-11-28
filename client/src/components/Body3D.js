"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function HumanModelComponent() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null); // Prevent duplicate renderer creation
  const sceneRef = useRef(null); // Persist scene instance

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!canvasRef.current || rendererRef.current) return; // Prevent duplicate initialization

      // Dimensions
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;

      // Scene
      const scene = new THREE.Scene();
      scene.background = null; // Transparent background
      sceneRef.current = scene; // Cache scene

      // Camera
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5000);
      camera.position.set(0, 0, 2); // Adjust camera position
      scene.add(camera);

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      canvasRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer; // Store renderer reference

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 10, 10);
      scene.add(directionalLight);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Restrict vertical rotation (polar angle)
      controls.minPolarAngle = Math.PI / 4; // Allow limited upward view
      controls.maxPolarAngle = (3 * Math.PI) / 4; // Allow limited downward view

      // Enable zoom with the scroll wheel
      controls.enableZoom = true;
      controls.minDistance = 0.5; // Minimum zoom distance
      controls.maxDistance = 10; // Maximum zoom distance

      // Load GLTF model
      const loader = new GLTFLoader();
      loader.load(
        "/peau.glb", // Replace with the correct path to your GLTF file
        (gltf) => {
          const model = gltf.scene;
          model.position.set(0, -1, 0); // Center the model
          model.scale.set(1, 1, 1); // Adjust scale if needed
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error("An error occurred while loading the model:", error);
        }
      );

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        const newWidth = canvasRef.current.clientWidth;
        const newHeight = canvasRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        rendererRef.current = null; // Reset renderer reference
      };
    }
  }, []); // Empty dependency array ensures this runs only once

  return <div ref={canvasRef} className="w-full h-full" />;
}

export default HumanModelComponent;
