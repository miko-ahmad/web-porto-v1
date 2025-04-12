import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbartest from "./components/navbar/Navbartest"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";
import ProfilePage from "./components/ProfilePage";



function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
    document.documentElement.classList.toggle("light", !darkmode);
    localStorage.setItem("theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []); 

  function toggleMode() {
    setDarkmode(!darkmode);
  }

  return (
    <>
      {loading && <Loader isLoading={loading} />}
      {!loading && ( // ⬅️ Hanya render konten saat loading selesai
        <div className="dark:bg-darkFour bg-lightOne min-h-screen py-10 ">
          {/* <ProfilePage /> */}
         
          {/* <div className="flex xl:hidden z-[50]">

              <Navbar toggleMode={toggleMode} darkMode={darkmode} />
          </div> */}
          <div className=" xl:mx-8 xl:flex xl:justify-center xl:items-stretch xl:gap-6 px-6 ">
            <Sidebar />
            <div className="min-w-[70%]   relative  dark:bg-darkTwo bg-lightTwo ">
              {/* <Navbartest /> */}
              <div className="hidden xl:flex">

              </div>
              <Navbar toggleMode={toggleMode} darkMode={darkmode} />

              <Routes>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<About darkMode={darkmode} />} />
                <Route
                  path="/resume"
                  element={<Resume darkMode={darkmode} />}
                />
                <Route
                  path="/portfolio"
                  element={<Portofolio darkMode={darkmode} />}
                />
              </Routes>

             
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
