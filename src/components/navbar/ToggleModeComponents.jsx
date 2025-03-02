/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import moonpng from "../../assets/img/moon.png";
// import sunpng from "../../assets/img/sun.png";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ToggleModeComponents ({ toggleMode, darkMode })  {
  return (
    <>
    <div className="px-2">

      <div
        onClick={toggleMode}
        className=" w-[56px] h-[25px] bg-lightTri dark:bg-darkFive border border-secondary rounded-full flex items-center justify-between relative cursor-pointer z-20"
      >
        <div
          className={
            darkMode
              ? "w-[20px] h-[20px] bg-darkOne rounded-full  absolute ml-[3px] transition-all duration-300"
              : "w-[20px] h-[20px] bg-darkOne rounded-full  absolute ml-[3px] translate-x-[27px] transition-all duration-300"
          }
        ></div>
        <FaMoon
          className="w-[20px] z-10 ml-1 text-lightOne"
          
        />
        <FaSun className="w-[20px] z-10 mr-1 text-darkFive"  />

      </div>
    </div>
    </>
  );
};

