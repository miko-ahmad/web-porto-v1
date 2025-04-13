import { useState } from "react";
// import projectsData from "../assets/data/projectData";
import { AiOutlineEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";



import IMG1 from "../assets/img/porto/portfolio-img1.png";
import IMG2 from "../assets/img/porto/portfolio-img2.png";
import IMG3 from "../assets/img/porto/portfolio-img3.png";

const projectsData = [
  {
    id: 1,
    title: "Buntu Mondong Coffee",
    category: "Web development",
    image: IMG1,
    demoLink: "https://buntumondongcoffee.vercel.app",
    sourceLink: "https://github.com/miko-ahmad/buntu-mondong-Coffe",
  },
  {
    id: 2,
    title: "UMI APPS",
    category: "Web design",
    image: IMG3,
    demoLink: "/",
    sourceLink: "/",
  },
];



const categories = ["All", "Web design", "Applications", "Web development"];

const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="container  dark:bg-darkTwo bg-lightTwo  mx-auto p-[24px] xl:p-[40px] dark:text-white text-textLight shadow-lg rounded-2xl p-8 border border-darkFive">
      <header className="pb-5">
        <h2 className="relative text-[35px] dark:text-lightOne text-darkOne font-bold pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-darkFive after:rounded-[3px] sm:after:w-[40px] sm:after:h-[5px]">
          Portfolio
        </h2>
      </header>

      <div className="pb-5">
        <div
          className="flex flex-wrap gap-4 mb-6 justify-center"
          data-aos="fade-right"
        >
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <ul
          data-aos="fade-right"
          data-aos-duration="500"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2  text-sm font-medium rounded-lg transition duration-300  border border-darkFive ${
        isActive
          ? "bg-darkFive text-darkOne  border border-darkFive dark:border-darkOne "
          : "bg-gray-300 dark:bg-darkOne hover:dark:bg-darkFive  hover:bg-darkFive "
      }`}
    >
      {category}
    </button>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <li className="group p-1 dark:bg-darkOne bg-gray-200 dark:text-white text-darkOne rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 drop-shadow-darkShadow max-w-[420px]">
      <figure className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-50 object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-row items-center justify-center gap-3 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View Demo"
            className="flex flex-col items-center text-white bg-white/10 hover:bg-white/20 p-3 rounded-md transition text-sm"
          >
            <AiOutlineEye size={26} />
            <span className="mt-1">View Demo</span>
          </a>
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code"
            className="flex flex-col items-center text-white bg-white/10 hover:bg-white/20 p-3 rounded-md transition text-sm"
          >
            <FaGithub size={24} />
            <span className="mt-1">Source Code</span>
          </a>
        </div>
      </figure>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.category}</p>
      </div>
    </li>
  );
};



export default Portofolio;
