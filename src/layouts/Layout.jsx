import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portofolio from "../pages/Portofolio";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [location]);

  return (
    <div className="xl:min-w-[75%] xl:w-[75%] xl:m-0 xl:relative xl:w-max xl:m-auto drop-shadow-darkShadow">
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portofolio />} />
        </Routes>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
