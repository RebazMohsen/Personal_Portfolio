import React from "react";
import "./skills.css";
function Skills() {
  return (
    <div className=" bg-[#430496] p-8 text-white   text-center mx-auto h-[110vh]">
      <div>
        <h1 className="text-4xl p-4">Skills</h1>
        <div className="flex gap-4 p-4 bg-[#2E1460]  border-2 w-[85%] mx-auto h-[90vh] rounded-3xl ">
          <div className=" transition-all duration-500 rounded-3xl w-[189px] h-[114px] bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <h1>Logo Here</h1>
          </div>
          <div className=" transition-all duration-500 rounded-3xl w-[189px] h-[114px] bg-[#050020]  hover:bg-[#1F113C]  hover:cursor-pointer">
            <h1>Logo Here</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
