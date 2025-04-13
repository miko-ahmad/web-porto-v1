import ContactInfo from "./ContactInfo";
import { useState } from "react";
import profileImageBlack from "../../assets/img/mik.png";
// import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

export default function Sidebar() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="container mx-auto p-4 dark:bg-darkTwo bg-lightTwo xl:sticky xl:top-[40px] xl:h-full xl:z-[1] rounded-2xl xl:max-w-[400px]  shadow-lg mb-4 xl:mb-0 border border-darkFive ">
      <section className="relative">
        <div className=" flex xl:flex-col justify-start items-center p-10">
          <div className="relative  sm:w-32 sm:h-29 flex items-center justify-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            <div className="absolute w-28 h-8  sm:w-40 sm:h-10 dark:bg-darkOne bg-gray-300 rounded-2xl z-[-3]"></div>
            <div className="absolute w-14 h-20  sm:-top-1 sm:w-16 sm:h-28 dark:bg-darkFive bg-darkFive rounded-full z-[-1] shadow-2xl"></div>
            {/* <div className="absolute w-20 h-24  sm:-top-1 sm:w-28 sm:h-32 dark:bg-darkOne bg-darkFive rounded-full z-[-2] shadow-2xl"></div> */}
            <div className="absolute  -top-4 sm:w-32 sm:h-36 dark:bg-darkOne bg-gray-300 rounded-full z-[-4]"></div>
            <img
              src={profileImageBlack}
              alt="HeroImage"
              className="rounded-xl scale-x-[-1] w-15 h-auto min-w-[50px]"
            />
          </div>
          {/* info content */}
          <div className="mx-8">
            <h2 className="whitespace-nowrap text-center dark:text-lightOne font-semibold text-sm sm:text-2xl ">
              Micho Ahmad S
            </h2>
            <p className=" text-xs sm:text-lg  text-center text-gray-400 pb-2 rounded-t-xl  m-auto  ">
              Web Developer
            </p>
          </div>
        </div>
        {/* contact  ukuran besar */}
        <div className="hidden  xl:block ">
          <ContactInfo />
        </div>
        {/* Show Contacts Button for Mobile */}
        <div className=" xl:hidden absolute -top-4 -right-4  ">
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-darkFive text-white hover:bg-lightOne hover:text-darkOne px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm"
          >
            {showContact ? "Hide Contacts" : "Show Contacts"}
          </button>
        </div>
        {showContact && (
          <div className="block xl:hidden ">
            <ContactInfo />
          </div>
        )}
      </section>
    </div>
  );
}
