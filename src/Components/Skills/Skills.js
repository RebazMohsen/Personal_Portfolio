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
    className: "center ",
    centerMode: true,
    centerPadding: "60px",
    arrows: true,

    swipeToSlide: true,
    dots: false,
    infinite: true,
    swipe: true,
    slidesToShow: 3,
    initialSlide: 2,
    lazyLoad: true,
    autoplay: true,
    slickPlay: true,
    speed: 950,
    autoplaySpeed: 4000,

    cssEase: "linear",
  };

  return (
    <div className="mb-56  p-8 text-white   text-center mx-auto  h-[50vh]">
      <div>
        <h1 className=" p-4">Skills</h1>
        <div className=" ">
          <Slider className="    " {...settings}>
            <div className="p-2 shadow-2xl">
              <div className=" g-10  font-sans h-[300px]    text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto h-[100%]  p-16 "
                    src={HTML}
                    alt="logo"
                  />
                </div>
                <h1>HTML</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="">
                  <img
                    className="mx-auto h-[100%]  p-16  "
                    src={CSS}
                    alt="logo"
                  />
                </div>
                <h1>CSS</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto h-[100%]  p-16  "
                    src={Javascript}
                    alt="logo"
                  />
                </div>
                <h1>Javascript</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto h-[100%]  p-16    "
                    src={Reactjs}
                    alt="logo"
                  />
                </div>
                <h1>ReactJS</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={MySql}
                    alt="logo"
                  />
                </div>
                <h1>MySql</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={CPlus}
                    alt="logo"
                  />
                </div>
                <h1>C++</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={Github}
                    alt="logo"
                  />
                </div>
                <h1>Github</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={Bootstrap}
                    alt="logo"
                  />
                </div>
                <h1>Bootstrap</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={Netlify}
                    alt="logo"
                  />
                </div>
                <h1>Netlify</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={npm}
                    alt="logo"
                  />
                </div>
                <h1>npm</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={Redux}
                    alt="logo"
                  />
                </div>
                <h1>Redux</h1>
              </div>
            </div>
            <div className="p-2">
              <div className="font-sans h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                <div className="  ">
                  <img
                    className="mx-auto  h-[100%]  p-16  "
                    src={Tailwind}
                    alt="logo"
                  />
                </div>
                <h1>Tailwind</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Skills;
