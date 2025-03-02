import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt,FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const ContactInfo = () => (
  <div className="flex flex-col p-4 rounded-xl text-sm text-gray-400 space-y-3 bg-red">
    <div className="flex items-center space-x-2">
      <FaEnvelope className="size-4 text-gray-500" />
      <p> michoahmad99@gmail.com</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaPhone className="size-4 text-gray-500" />
      <p> +6285756942080</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaBirthdayCake className="size-4 text-gray-500" />
      <p> June 26, 1997</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaMapMarkerAlt className="size-4 text-gray-500" />
      <p> Pasar minggu, Jakarta Selatan, IDN</p>
    </div>
    <div className="py-6 flex flex gap-6">
        <FaGithub />
        <FaGitlab />
        <FaLinkedin />
      </div>
  </div>
  
);

export default ContactInfo;
