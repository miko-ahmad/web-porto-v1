import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt,FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const ContactInfo = () => (
  <div className="flex flex-col px-8 rounded-xl text-sm  space-y-3 bg-red justify-center">
    <div className="flex items-center space-x-2">
      <FaEnvelope className="size-4 text-darkFive" />
      <p className="dark:text-gray-400 text-darkOne"> michoahmad99@gmail.com</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaPhone className="size-4 text-darkFive" />
      <p className="dark:text-gray-400 text-darkOne"> +6285756942080</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaBirthdayCake className="size-4 text-darkFive" />
      <p className="dark:text-gray-400 text-darkOne"> June 26, 1997</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaMapMarkerAlt className="size-4 text-darkFive" />
      <p className="dark:text-gray-400 text-darkOne"> Pasar minggu, Jakarta Selatan, IDN</p>
    </div>
    <div className="py-4 flex flex gap-6 items-center justify-center text-xl text-gray-500 ">
        <FaGithub className="hover:text-darkFive"/>
        <FaGitlab className="hover:text-darkFive"/>
        <FaLinkedin className="hover:text-darkFive"/>
      </div>
  </div>
  
);

export default ContactInfo;
