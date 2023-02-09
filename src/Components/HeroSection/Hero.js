import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles";
import "./Hero.css";

// Animated Icons
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import arrowDownCircle from "react-useanimations/lib/arrowDownCircle";

function Particle() {
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
        <a className="" href="#About">
          <div className="    flex   bg-[#2506ad]    hover:bg-[#230F7E] shadow-md shadow-[#2506ad] p-[10px] pl-[30px] m-4 w-[167px] h-[45px] rounded-3xl text-white  font-semibold ml-2 ">
            <div className="  ">About Me</div>
            <UseAnimations
              className={` fill-gray-50  m-0  `}
              animation={arrowDownCircle}
              size={30}
              strokeColor="white"
              loop={false}
            />
          </div>
        </a>
        <div className="pt-2 pb-2 flex ">
          <a href="https://github.com/RebazMohsen">
            <UseAnimations
              className="border-2 rounded-full p-2 hover:bg-slate-300 "
              animation={github}
              size={55}
              loop={false}
            />
          </a>
          <a href="https://iq.linkedin.com/in/rebaz-mohsen-a68817170 ">
            <UseAnimations
              className="border-2 rounded-full p-2 hover:bg-slate-300"
              animation={linkedin}
              size={55}
              loop={false}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Particle;
