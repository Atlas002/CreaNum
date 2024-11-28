"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function HumanModelComponent({ modelType, target, reset }) {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 5000));
  const controlsRef = useRef(null);
  const modelRef = useRef(null);

  const modelPaths = {
    peau: "/peau.glb",
    muscles: "/muscles.glb",
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize Renderer
    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      canvas.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    }

    const renderer = rendererRef.current;

    // Initialize Scene, Camera, and Controls
    const scene = sceneRef.current;
    scene.background = null;

    const camera = cameraRef.current;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.position.set(0, 0, 2);
    camera.updateProjectionMatrix();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Handle Window Resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // Load Model when `modelType` changes
  useEffect(() => {
    if (!modelType || !modelPaths[modelType]) return;

    const loader = new GLTFLoader();
    const scene = sceneRef.current;

    if (modelRef.current) {
      scene.remove(modelRef.current);
    }

    loader.load(
      modelPaths[modelType],
      (gltf) => {
        modelRef.current = gltf.scene;
        modelRef.current.position.set(0, -1, 0);
        modelRef.current.scale.set(1, 1, 1);
        scene.add(modelRef.current);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );
  }, [modelType]);

  // Handle Zooming to Target
  useEffect(() => {
    if (!target) return;

    const { x, y, z, distance } = target;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    controls.enabled = false; // Disable camera controls
    camera.position.set(x, y, z + distance);
    camera.lookAt(x, y, z);
  }, [target]);

  // Handle Reset
  useEffect(() => {
    if (!reset) return;

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, 0);
    controls.enabled = true; // Re-enable camera controls
  }, [reset]);

  return <div ref={canvasRef} className="w-full h-full" />;
}

export default HumanModelComponent;
