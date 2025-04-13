import React from "react";
import { educationData } from "../assets/data/educationData";
import { FaBook } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import Binar from "../assets/img/binar.png";
import Umi from "../assets/img/umi.png";
import Skills from "../components/skills/Skills";

const Resume = () => {
  return (
    <div className="container  dark:bg-darkTwo bg-lightTwo  mx-auto p-[24px] xl:p-[40px] dark:text-white text-textLight shadow-lg rounded-2xl p-8 border border-darkFive">
      {/* Header */}
      <header className="pb-5">
        <h2 className="relative text-[35px] font-bold pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-darkFive after:rounded-[3px] sm:after:w-[40px] sm:after:h-[5px]">
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <div className="">
        {/* Title with Icon */}
        <div className="flex  items-center gap-3 mb-6 p-2">
          <div className=" relative flex items-center justify-center  w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] text-[16px] sm:text-[18px]  shadow-custom-dark dark:bg-custom-gradient bg-gray-300 z-[1]  border border-darkFive">
            <IoBookOutline className=" p-[4px] text-[28px] " />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        {/* Timeline */}
        <div className="pl-8">
          <ol
            data-aos="fade-right"
            data-aos-duration="500"
            className="relative border-l border-darkFive"
          >
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              className="mb-10 ml-9"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-headings rounded-full -left-12 ring-4 ring-white dark:ring-darkTri dark:bg-darkTwo bg-gray-300 p-1 drop-shadow-darkShadow">
                <img src={Binar} alt="Binar Academy logo" className=" w-6" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-headings dark:text-white">
                Binar Academy Bootcamp
              </h3>
              <time className="block mb-2 text-xs font-normal text-gray-400 dark:text-gray-500">
                Full Stack Web Developer | Jan – Aug, 2023
              </time>
              <ul className="ml-4 text-sm text-gray-500 dark:text-gray-400 list-disc">
                <li>
                  Thesis: Website for PT. Iconplus service complaints with
                  urgency classification using K-Nearest Neighbors (KNN)
                  algorithm
                </li>
                <li>Student with the 2nd highest GPA in the field of study</li>
              </ul>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              className="mb-10 ml-9"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-headings rounded-full -left-12 ring-4 ring-white dark:ring-darkTri dark:bg-darkTwo bg-gray-300 p-1 drop-shadow-darkShadow">
                <img
                  src={Umi}
                  alt="Universitas Muslim Indonesia logo"
                  className="w-6"
                />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-headings dark:text-white">
                Universitas Muslim Indonesia
              </h3>
              <time className="block mb-2 text-xs text-gray-400 dark:text-gray-500">
                Teknik Informatika | Aug, 2015 – Jun, 2022
              </time>
              <ul className="ml-4 text-sm text-gray-500 dark:text-gray-400 list-disc">
                <li>Thesis: Desain UI/UX UMI Apps</li>
                <li>Student with GPA 3.16</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="separator bg-darkFive  "></div>

      <div className="pb-5">
        {/* Title with Icon */}
        <div className="flex  items-center gap-3 mb-6 p-2">
          <div className=" relative flex items-center justify-center w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] text-[16px] sm:text-[18px]  shadow-custom-dark dark:bg-custom-gradient bg-gray-300 z-[1] border border-darkFive">
            <IoBookOutline className=" p-[4px] text-[28px] " />
          </div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="pl-8">
          <ol
            data-aos="fade-right"
            data-aos-duration="500"
            className="relative border-l border-darkFive"
          >
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              className="mb-10 ml-9"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-headings rounded-full -left-12 ring-4 ring-white dark:ring-darkTri dark:bg-darkTwo bg-gray-300 p-1 drop-shadow-darkShadow">
                <img src={Binar} alt="Binar Academy logo" className=" w-6" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-headings dark:text-white">
                Binar Academy Bootcamp
              </h3>
              <time className="block mb-2 text-xs font-normal text-gray-400 dark:text-gray-500">
                Full Stack Web Developer | Jan – Aug, 2023
              </time>
              <ul className="ml-4 text-sm text-gray-500 dark:text-gray-400 list-disc">
                <li>
                  Thesis: Website for PT. Iconplus service complaints with
                  urgency classification using K-Nearest Neighbors (KNN)
                  algorithm
                </li>
                <li>Student with the 2nd highest GPA in the field of study</li>
              </ul>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              className="mb-10 ml-9"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-headings rounded-full -left-12 ring-4 ring-white dark:ring-darkTri dark:bg-darkTwo bg-gray-300 p-1 drop-shadow-darkShadow">
                <img
                  src={Umi}
                  alt="Universitas Muslim Indonesia logo"
                  className="w-6"
                />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-headings dark:text-white">
                Universitas Muslim Indonesia
              </h3>
              <time className="block mb-2 text-xs text-gray-400 dark:text-gray-500">
                Teknik Informatika | Aug, 2015 – Jun, 2022
              </time>
              <ul className="ml-4 text-sm text-gray-500 dark:text-gray-400 list-disc">
                <li>Thesis: Desain UI/UX UMI Apps</li>
                <li>Student with GPA 3.16</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="separator bg-darkFive  "></div> 

      <Skills />
    </div>
  );
};

export default Resume;
