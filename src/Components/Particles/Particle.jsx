import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
function Particle() {
  console.log(particlesOptions);
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <div className=" ">
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default Particle;
