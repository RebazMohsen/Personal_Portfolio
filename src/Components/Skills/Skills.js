import React from "react";
import "./skills.css";
import Reactjs from "../../assets/icons/skillsIcons/ReactJS.png";
import CSS from "../../assets/icons/skillsIcons/CSS.png";
import HTML from "../../assets/icons/skillsIcons/HTML.png";
import Javascript from "../../assets/icons/skillsIcons/Javascript.png";
import MySql from "../../assets/icons/skillsIcons/MySql.png";
import CPlus from "../../assets/icons/skillsIcons/CPlus.png";
import Github from "../../assets/icons/skillsIcons/Github.png";
import Bootstrap from "../../assets/icons/skillsIcons/Bootstrap.png";
import Netlify from "../../assets/icons/skillsIcons/Netlify.png";
import npm from "../../assets/icons/skillsIcons/npm.png";
import Redux from "../../assets/icons/skillsIcons/Redux.png";
import Tailwind from "../../assets/icons/skillsIcons/Tailwind.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className=" bg-[#430496] p-8 text-white   text-center mx-auto  h-[120vh]">
      <div>
        <h1 className="text-4xl p-4">Skills</h1>
        {/*  <div className="grid md:grid-cols-5 md:grid-rows-3 gap-y-2 overflow-clip md:gap-4 p-4 bg-[#2E1460]  border-2 w-[85%] mx-auto h-[90vh] rounded-3xl transition-all duration-500"> */}
        <Slider {...settings}>
          <div className="font-sans  w-[100px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img className="mx-auto h-[50%]  p-16  " src={HTML} alt="logo" />
            </div>
            <h1>HTML</h1>
          </div>
          <div className="font-sans w-[100px] text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="">
              <img className="mx-auto h-[50%]  p-16  " src={CSS} alt="logo" />
            </div>
            <h1>CSS</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img
                className="mx-auto h-[50%]  p-16  "
                src={Javascript}
                alt="logo"
              />
            </div>
            <h1>Javascript</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img
                className="mx-auto h-[50%]  p-16    "
                src={Reactjs}
                alt="logo"
              />
            </div>
            <h1>ReactJS</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img className="mx-auto   p-16  " src={MySql} alt="logo" />
            </div>
            <h1>MySql</h1>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Skills;
