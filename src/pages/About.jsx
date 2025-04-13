import React from "react";
import {
  FaPencilRuler,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";
import Divider from "../components/slider/Divider";
import TechSlider from "../components/slider/TechSlider";
import Navbar from "../components/navbar/Navbar";

const About = ({ darkMode }) => {
  const services = [
    {
      title: "Web Design",
      description:
        "The most modern and high-quality design made at a professional level.",
      icon: <FaPencilRuler className="text-darkFive  text-4xl" />,
    },
    {
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
      icon: <FaCode className="text-darkFive text-4xl" />,
    },
    {
      title: "Mobile Apps",
      description:
        "Professional development of applications for iOS and Android.",
      icon: <FaMobileAlt className="text-darkFive text-4xl" />,
    },
    {
      title: "Graphic Design",
      description:
        "High-quality graphic design solutions for branding and marketing needs.",
      icon: <FaPaintBrush className="text-darkFive text-4xl" />,
    },
  ];

  return (
    <div className="container  dark:bg-darkTwo bg-lightTwo  mx-auto p-[24px] xl:p-[40px] dark:text-white text-textLight shadow-lg rounded-2xl p-8 border border-darkFive">
      {/* <Navbar /> */}
      <header className="pb-5">
        <h2 className="relative text-[35px] dark:text-lightOne text-darkOne font-bold pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-darkFive after:rounded-[3px] sm:after:w-[40px] sm:after:h-[5px]">
          About Me
        </h2>
      </header>
      <section
        data-aos="fade-right"
        data-aos-duration="500"
        className="pb-5 text-justify text-gray-400 "
      >
        <p>
          Saya seorang Web Developer yang telah bersertifikasi oleh Binar
          Academy Bootcamp. Saya memiliki keahlian dalam membangun website
          modern, cepat, dan responsif menggunakan teknologi terkini seperti
          React.js, Tailwind CSS, dan Node.js.
        </p>
        <br />
        <p>
          Dengan fokus pada pengalaman pengguna yang intuitif dan performa
          tinggi, saya siap membantu mewujudkan ide Anda menjadi solusi digital
          yang luar biasa.
        </p>
      </section>
      <section className="flex items-center pb-5">
        <h2 className="text-base sm:text-lg font-semibold text-headings dark:text-white">
          Tech Stack
        </h2>
        <Divider />
        <TechSlider darkMode={darkMode} />
      </section>
      <div className="separator bg-darkFive "></div>
      <section id="what-i-do" className="mb-8">
        <h2 className="text-2xl font-bold mb-6">What I'm Doing</h2>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="dark:bg-darkOne bg-lightOne p-6 shadow-lg rounded-lg flex items-center gap-4"
            >
              {service.icon}
              <div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
