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

//Lottie
import Avatar from "../Avatar/Avatar";

//Typing Animation
import Typed from "react-typed";

function Hero() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <div className="h-[100vh]    lg:flex   ">
      <Particles
        init={particlesInit}
        className="h-[100%]     "
        options={particlesOptions}
      />
      <div className="     p-4 lg:p-7    ">
        <h1 className="    text-[55px] mobile:text-[45px]   lg:text-[80px] transition-all duration-1000    ">
          Hi There,
          <br /> I'm Rebaz <span className="text-orange-400"> Mohsen </span>
        </h1>
        <div className="lg:w-[700px] p-4   transition-all duration-1000 mobile:text-[20px] text-[25px] lg:text-[35px]    ">
          {/* <p>I'm A Front-End Developer</p> */}
          <Typed
            strings={[
              "I'm A Front-End Developer sleep eat and breath",

              "I'm A Front-End Developer sleep eat and breath HTML",

              "I'm A Front-End Developer sleep eat and breath CSS",

              "I'm A Front-End Developer sleep eat and breath JavaScript",

              "I'm A Front-End Developer sleep eat and breath React",

              "I'm A Front-End Developer sleep eat and breath Bootstrap",

              "I'm A Front-End Developer sleep eat and breath Tailwind",

              "I'm A Front-End Developer sleep eat and breath Redux",

              "I'm A Front-End Developer sleep eat and breath Coffee",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr=""
            loop
          >
            {/*    <input type="text" /> */}
          </Typed>
        </div>

        <a className="" href="#About">
          <div className="    flex   bg-[#2506ad]    hover:bg-[#230F7E] shadow-md shadow-[#2506ad] p-[10px] pl-[30px] m-4 w-[167px] h-[45px]  rounded-3xl text-white  font-semibold ml-2 ">
            <div className="  ">About Me</div>
            <UseAnimations
              className={` fill-gray-50  m-0   `}
              animation={arrowDownCircle}
              size={30}
              strokeColor="white"
              loop={false}
            />
          </div>
        </a>
        <div className="pt-2 pb-2 flex ">
          <a
            href="https://github.com/RebazMohsen"
            target="_blank"
            rel="noreferrer"
          >
            <UseAnimations
              className="border-2 rounded-full p-2 hover:bg-slate-300 "
              animation={github}
              size={55}
              loop={false}
            />
          </a>
          <a
            href="https://iq.linkedin.com/in/rebaz-mohsen-a68817170 "
            target="_blank"
            rel="noreferrer"
          >
            <UseAnimations
              className="ml-2 border-2 rounded-full p-2 hover:bg-slate-300"
              animation={linkedin}
              size={55}
              loop={false}
            />
          </a>
        </div>
      </div>
      <div className="     ">
        <Avatar />
      </div>
    </div>
  );
}

export default Hero;
