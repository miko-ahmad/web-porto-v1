import React from "react";
import { useState } from "react";
import profileImageBlack from "../../assets/img/mik.png";


const SidebarComp = () => {
    const [showContact, setShowContact] = useState(false);
  return (
    <div className="bg-gray-300 w-full md:w-64 h-32 md:h-screen flex items-center justify-center">
    <h2 className="text-xl font-bold">sidebar</h2>
  </div>
  );
};

export default SidebarComp;
