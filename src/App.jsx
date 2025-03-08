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

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [loading, setLoading] = useState(true); // ⬅️ Default jadi true saat pertama kali render
  const location = useLocation(); // ⬅️ Ambil lokasi saat ini

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
    document.documentElement.classList.toggle("light", !darkmode);
    localStorage.setItem("theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // ⬇️ Aktifkan loader setiap kali halaman berubah
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulasi loading
    return () => clearTimeout(timeout); // Bersihkan timeout agar tidak menumpuk
  }, [location.pathname]); // ⬅️ Loading aktif setiap kali lokasi berubah

  function toggleMode() {
    setDarkmode(!darkmode);
  }

  return (
    <>
      {loading && <Loader isLoading={loading} />} {/* ⬅️ Loader hanya tampil saat loading aktif */}
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
