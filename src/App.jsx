import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbartest from "./components/navbar/Navbartest";
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
        <div className="dark:bg-wavy-dark bg-wavy-light min-h-screen py-10  ">
          <div className="xl:max-w-[1440px] mx-auto ">
            <div className=" xl:mx-8 xl:flex xl:justify-center xl:items-stretch xl:gap-6 px-6 ">
              <Sidebar />
              {/* <img src={Wave} className="absolute  top-0 w-full " alt="wave-line" /> */}
              <div className="  relative">
                {/* <Navbartest /> */}
                <Navbar toggleMode={toggleMode} darkMode={darkmode} />

                <Routes>
                  <Route path="/" element={<Navigate to="/about" replace />} />
                  <Route
                    path="/about"
                    element={<About darkMode={darkmode} />}
                  />
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
        </div>
      )}
    </>
  );
}

export default App;
