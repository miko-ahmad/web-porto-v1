import ContactInfo from "./ContactInfo";
import { useState } from "react";
import profileImageBlack from "../../assets/img/mik.png";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

export default function Sidebar() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="container mx-auto p-4 dark:bg-darkTwo bg-gray-200 xl:sticky xl:top-[40px] xl:h-full xl:z-[1] rounded-2xl  drop-shadow-darkShadow mb-4 xl:mb-0 ">
      <section>
        <div className="relative flex xl:flex-col justify-start items-center p-6 ">
          <div className="relative w-32 h-29 flex items-center justify-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            <div className="absolute  w-40 h-10 dark:bg-darkOne bg-orange-300 rounded-2xl z-[-3]"></div>
            <div className="absolute  -top-1 w-16 h-28 dark:bg-darkFive bg-orange-500 rounded-full z-[-1] shadow-2xl"></div>
            <div className="absolute -top-1 w-28 h-32 dark:bg-darkOne bg-orange-400 rounded-full z-[-2] shadow-2xl"></div>
            <div className="absolute -top-4 w-32 h-36 dark:bg-darkOne bg-orange-300 rounded-full z-[-4]"></div>
            <img
              src={profileImageBlack}
              alt="HeroImage"
              className="rounded-xl scale-x-[-1]"
            />
          </div>
          {/* info content */}
          <div className="">
            <h2 className="whitespace-nowrap text-center dark:text-lightOne font-semibold ">
              Micho Ahmad S
            </h2>
            <p className="dark:bg-darkOne  dark:text-lightOne p-2 rounded-t-xl  m-auto  ">
              Web Developer
            </p>
          </div>
        </div>
        {/* contact  ukuran besar */}
        <div className="hidden  xl:block mt-4">
          <ContactInfo />
        </div>
        {/* Show Contacts Button for Mobile */}
        <div className=" xl:hidden absolute top-0 bottom-auto left-auto right-0 ">
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-darkFive text-white hover:bg-lightOne hover:text-darkOne px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm"
          >
            {showContact ? "Hide Contacts" : "Show Contacts"}
          </button>
        </div>
        {showContact && (
          <div className="mt-4 xl:hidden">
            <ContactInfo />
          </div>
        )}
      </section>
    </div>
  );
}
