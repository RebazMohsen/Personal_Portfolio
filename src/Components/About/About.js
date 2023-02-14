import React from "react";

export default function About() {
  return (
    <div id="About" className="  h-[100vh] ">
      <div className="p-8 md:p-8 mt-4">
        <h1 className=" text-xl  md:text-4xl text-center">About Me</h1>
        <div className="font-serif   flex p-4 mt-10 mx-auto w-[60%] text-justify   ">
          <div className="text-md   md:text-2xl">
            <h1 className="font-bold     border-2 text-center rounded-xl">
              I'm Rebaz Front-End Developer
            </h1>
            <br />
            <h1 className=" ">
              I am a Bachelor's degree holder in department of Engineering and
              Computer Science and I was one of the top students in my
              department, I am one of the Rwangah Foundation Alumni Front-End (
              <strong>WeCode</strong>) Boot-camp I have over six months of
              experience in
              <strong className="text-black"> React</strong> and other web
              development technologies, I am very passionate about improving my
              coding skills & developing WebApps & websites.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
