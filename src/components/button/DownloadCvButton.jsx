import { FaDownload } from "react-icons/fa";

const DownloadCVButton = () => {
  return (
    <a
      href="/path-ke-cv-kamu.pdf" // Ganti dengan path file CV kamu
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-darkFive text-white text-sm md:text-base font-semibold rounded-2xl hover:bg-blue-700 transition duration-300 shadow-md"
    >
      <FaDownload className="text-base md:text-lg" />
      Download CV
    </a>
  );
};

export default DownloadCVButton;
