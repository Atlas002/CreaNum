// About page
"use client";

import Layout from '../components/Layout';
import React from "react";
import HumanModelComponent from "../components/Body3D";

export default function Explore() {
  return (
    <Layout>   
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
    {/* Top Section */}
    <div className="mb-8 text-center">
    <h1 className="wt-title-better">
    Let's learn more, better & faster.
    </h1>
    </div>
    
    {/* Main Content */}
    <div className="flex flex-col items-center">
    <div className="flex items-center justify-center space-x-8">
    {/* Left Buttons */}
    <div className="flex flex-col space-y-4">
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Peau</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Muscles</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Reset</button>
    </div>
    
    {/* Middle Image */}
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "600px", height: "900px" }}>
        <HumanModelComponent />
      </div>
    </div>
    
    {/* Right Buttons */}
    <div className="flex flex-col space-y-4">
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Tête</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Torse</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Bras</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Main</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Jambes</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Pieds</button>
    </div>
    </div>
    </div>
    
    </div>
    </Layout>
  );
}
