import React from "react";
import { useState } from "react";
import profileImageBlack from "../../assets/img/mik.png";


const SidebarComp = () => {
    const [showContact, setShowContact] = useState(false);
  return (
    <div className="lg:sticky top-[40px] self-start dark:bg-darkTwo bg-lightTwo py-8 rounded-2xl w-full lg:min-w-[240px] lg:max-w-[290px] cus:min-w-auto cus:max-w-[400px] flex flex-col lg:items-center text-center lg:py-[80px] ">
          <div className="flex lg:flex-col items-center justify-start gap-10 lg:pl-0 lg:gap-0 pl-24">
            <div className="relative w-32 h-32 flex items-center justify-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              {/* Shape Besar */}
              <div className="absolute w-40 h-10 bg-darkOne rounded-2xl z-[-3]"></div>
              {/* Shape Kecil */}
              <div className="absolute w-28 h-32 bg-darkFive rounded-full z-[-3] shadow-2xl"></div>
              <div className="absolute w-32 h-36 bg-darkOne rounded-full z-[-4]"></div>
    
              <img
                src={profileImageBlack}
                alt="HeroImage"
                className="rounded-xl scale-x-[-1]"
              />
            </div>
            <div>
              <h2 className="lg:hidden text-xl font-semibold uppercase text-darkFive ">
                Micho Ahmad S
              </h2>
              <p className="bg-darkOne dark:text-lightOne  px-3 py-1 font-semibold rounded-full text-sm mt-2  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                Web Developer
              </p>
            </div>
          </div>
          {/* contact  ukuran besar */}
          <div className="hidden  lg:block mt-4">
            {/* <ContactInfo /> */}
          </div>
          {/* Show Contacts Button for Mobile */}
          <div className="mt-4 lg:hidden">
            <button
              onClick={() => setShowContact(!showContact)}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm"
            >
              {showContact ? "Hide Contacts" : "Show Contacts"}
            </button>
          </div>
          {showContact && (
            <div className="mt-4 lg:hidden">
              <ContactInfo />
            </div>
          )}
    
          {/* <div className="py-6 flex flex gap-6">
            <FaGithub />
            <FaGitlab />
            <FaLinkedin />
          </div> */}
        </div>
  );
};

export default SidebarComp;
