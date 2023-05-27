import React from "react";
import "./skills.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import skills from "./myskills";

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
    <div className="mb-56  p-8    text-center mx-auto  h-[50vh]">
      <h1 className=" p-10 text-7xl">Skills</h1>

      <div>
        {/*  <div className="grid md:grid-cols-5 md:grid-rows-3 gap-y-2 overflow-clip md:gap-4 p-4 bg-[#2E1460]  border-2 w-[85%] mx-auto h-[90vh] rounded-3xl transition-all duration-500"> */}
        <div className=" ">
          <Slider className="    " {...settings}>
            {skills.map((item, index) => {
              return (
                <div className="p-2 text-white">
                  <div className="font-sans   h-[300px]  text-xl md:text-2xl  rounded-3xl   bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
                    <div className="">
                      <img
                        className="mx-auto h-[100%]  p-16  "
                        src={item.image}
                        alt="logo"
                      />
                    </div>
                    <h1>{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Skills;
