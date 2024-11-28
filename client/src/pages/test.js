// pages/test.js
import React from "react";
import HumanModelComponent from "../components/Body3D";

const HomePage = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "600px", height: "600px" }}>
        <HumanModelComponent />
      </div>
    </div>
  );
};

export default HomePage;
