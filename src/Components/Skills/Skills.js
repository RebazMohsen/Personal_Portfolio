import React from "react";
import "./skills.css";
import Reactjs from "../../assets/icons/skillsIcons/Reactjs.png";

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
              <img className="mx-auto  p-16  " src={Reactjs} alt="logo" />
            </div>
            <h1>First ReactJS</h1>
          </div>
          <div className="font-sans w-[100px] text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="">
              <img className="mx-auto  p-16  " src={Reactjs} alt="logo" />
            </div>
            <h1>ReactJS</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img className="mx-auto  p-16  " src={Reactjs} alt="logo" />
            </div>
            <h1>ReactJS</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img className="mx-auto  p-16  " src={Reactjs} alt="logo" />
            </div>
            <h1>ReactJS</h1>
          </div>
          <div className="font-sans  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <div className="  ">
              <img className="mx-auto  p-16  " src={Reactjs} alt="logo" />
            </div>
            <h1>Last</h1>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Skills;
