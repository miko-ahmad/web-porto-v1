import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Footer from "./components/footer/footer";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";
import Loader from "./components/loader/Loader"; // Import Loader

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
    document.documentElement.classList.toggle("light", !darkmode);
    localStorage.setItem("theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Tampilkan Loader saat aplikasi pertama kali dimuat dan saat berpindah halaman
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Simulasi waktu loading
  }, []);

  function toggleMode() {
    setDarkmode(!darkmode);
  }

  return (
    <>
      <Loader isLoading={loading} />
      <div className="dark:bg-darkOne bg-lightBg min-h-screen py-10">
        <div className="xl:max-w-[1500px] xl:mx-auto xl:flex xl:justify-center xl:items-stretch xl:gap-6 px-6">
          <Sidebar />
          <div className="xl:min-w-[75%] xl:w-[75%] xl:m-0 xl:relative xl:w-max xl:m-auto drop-shadow-darkShadow">
            <Navbar toggleMode={toggleMode} darkMode={darkmode} />

            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About darkMode={darkmode} />} />
              <Route path="/resume" element={<Resume darkMode={darkmode} />} />
              <Route
                path="/portfolio"
                element={<Portofolio darkMode={darkmode} />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
