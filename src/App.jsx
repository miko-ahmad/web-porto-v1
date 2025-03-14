import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";
import Navbartest from "./components/navbar/Navbartest";


function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [loading, setLoading] = useState(true); // Loader hanya untuk first load
  

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
    document.documentElement.classList.toggle("light", !darkmode);
    localStorage.setItem("theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Loader hanya saat pertama kali halaman dimuat
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []); // ⬅️ Tidak bergantung pada location.pathname

  function toggleMode() {
    setDarkmode(!darkmode);
  }

  return (
    <>
      {loading && <Loader isLoading={loading} />}
      {!loading && ( // ⬅️ Hanya render konten saat loading selesai
        <div className="dark:bg-darkOne bg-light-bg min-h-screen py-10">
          {/* <Navbartest /> */}
          <div className="flex xl:hidden z-[50]">

              <Navbar toggleMode={toggleMode} darkMode={darkmode} />
          </div>
          <div className="xl:max-w-[1500px] xl:mx-auto xl:flex xl:justify-center xl:items-stretch xl:gap-6 px-6">
            <Sidebar />
            <div className="xl:min-w-[75%] xl:w-[75%] xl:m-0  xl:relativ xl:w-max xl:m-auto drop-shadow-darkShadow">
              <div className="hidden xl:flex">

              <Navbar toggleMode={toggleMode} darkMode={darkmode} />
              </div>

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

              {/* <Footer /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
