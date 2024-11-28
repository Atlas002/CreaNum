"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import HumanModelComponent from "../components/Body3D";

export default function Explore() {
  const [modelType, setModelType] = useState("peau");
  const [target, setTarget] = useState(null);
  const [reset, setReset] = useState(false);

  const zoomToBodyPart = (x, y, z, distance) => {
    setTarget({ x, y, z, distance });
    setReset(false); // Clear reset state
  };

  const resetView = () => {
    setTarget(null);
    setReset(true); // Trigger reset
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between min-h-screen p-6">
        <div className="mb-8 text-center">
          <h1 className="wt-title-better">Let's learn more, better & faster.</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-8">
            {/* Left Buttons */}
            <div className="flex flex-col space-y-4">
              <button
                className="px-4 py-2 text-gray-800 bg-white rounded"
                onClick={() => setModelType("peau")}
              >
                Peau
              </button>
              <button
                className="px-4 py-2 text-gray-800 bg-white rounded"
                onClick={() => setModelType("muscles")}
              >
                Muscles
              </button>
              <button
                className="px-4 py-2 text-gray-800 bg-white rounded"
                onClick={resetView}
              >
                Reset
              </button>
            </div>

            {/* Middle 3D Model */}
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "600px", height: "900px" }}>
                <HumanModelComponent modelType={modelType} target={target} reset={reset} />
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col space-y-4">
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(0, 1, 0, 0.5)}>Tête</button>
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(0, 0.5, 0, 1)}>Torse</button>
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(1, 0, 0, 1)}>Bras</button>
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(0.5, -0.5, 0, 0.5)}>Main</button>
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(0, -1, 0, 1)}>Jambes</button>
              <button className="px-4 py-2 text-gray-800 bg-white rounded" onClick={() => zoomToBodyPart(0, -1.5, 0, 0.5)}>Pieds</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
