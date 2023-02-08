import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles";
import "./Hero.css";
function Particle() {
  console.log(particlesOptions);
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <div className="  ">
      <Particles
        init={particlesInit}
        className="h-[600px]    "
        options={particlesOptions}
      />
      <div className="     p-4    ">
        <h1 className="    text-[50px] transition-all duration-1000    ">
          Hi There,
          <br /> I'm Rebaz Mohsen
        </h1>
        <div className=" text-[25px]   ">
          <p>I'm A Front-End Developer</p>
        </div>
        <a href="#About">
          <button className=" bg-[#2506ad]   hover:bg-[#230F7E] shadow-md shadow-[#2506ad] p-2 m-4 w-[167px] h-[45px] rounded-3xl text-white  font-semibold ml-2 ">
            About Me
          </button>
        </a>
      </div>
    </div>
  );
}

export default Particle;
