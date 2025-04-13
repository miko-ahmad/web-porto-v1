import { useState } from "react";
import projectsData from "../assets/data/projectData";
import { AiOutlineEye } from "react-icons/ai"; // Import icon React
const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web design", "Applications", "Web development"];

  // Filter project berdasarkan kategori yang dipilih
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="container  dark:bg-darkTwo bg-lightTwo  mx-auto p-[24px] xl:p-[40px]  shadow-lg rounded-2xl p-8 border border-darkFive">
      <header className="pb-5">
        <h2 className="relative dark:text-lightOne text-darkFive text-[35px] font-bold pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-darkFive after:rounded-[3px] sm:after:w-[40px] sm:after:h-[5px]">
          Portfolio
        </h2>
      </header>
      <div className="pb-5">
        <div
          data-aos="fade-right"
          className="flex flex-wrap gap-4 mb-6 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition duration-300 ${
                selectedCategory === category
                  ? "bg-darkOne text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-darkFive dark:hover:bg-darkOne"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ul
          data-aos="fade-right"
          data-aos-duration="500"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className=" group p-1 dark:bg-darkOne bg-gray-200 dark:text-white text-darkOne rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 drop-shadow-darkShadow max-w-[420px]"
            >
              <a href="#" className="block">
                <figure className="relative">
                  <img
                    src={
                      typeof project.image === "string"
                        ? project.image
                        : require(`${project.image}`).default
                    }
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  {/* Icon ditampilkan saat hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <AiOutlineEye size={30} className="text-white" />
                  </div>
                </figure>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portofolio;
