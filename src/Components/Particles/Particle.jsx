import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles";
import "./particles.css";
function Particle() {
  console.log(particlesOptions);
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <div className=" ">
      <Particles
        init={particlesInit}
        className="h-[500px]  "
        options={particlesOptions}
      />
      <h1 className="text-4xl">My Name</h1>
    </div>
  );
}

export default Particle;
