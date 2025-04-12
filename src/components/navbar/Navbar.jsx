import { NavLink } from "react-router-dom";
import {
  BiUser,
  BiFile,
  BiBriefcase,
  BiNews,
  BiEnvelope,
} from "react-icons/bi";
import ToggleModeComponents from "./ToggleModeComponents";

export default function Navbar({ toggleMode, darkMode }) {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full xl:dark:bg-darkOne xl:bg-gray-300 bg-opacity-50 backdrop-blur-[10px] border xl:border-[0] rounded-t-[12px] z-[50] 
           xl:absolute xl:top-0 xl:bottom-auto xl:left-auto xl:right-0 xl:w-max xl:rounded-bl-[20px] xl:rounded-t-[0] xl:rounded-tr-2xl xl:px-[20px]"
    >
      <ul className="flex flex-wrap justify-center items-center px-[10px] lg:gap-[30px] p-3">
        <li className="navbar-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center text-[16px] px-2 py-2 rounded-md transition ${
                isActive
                  ? "text-darkFive dark:text-darkFive"
                  : "text-darkOne dark:text-gray-300 hover:text-darkFive dark:hover:text-darkFive"
              }`
            }
          >
            <BiUser size={24} className="xl:hidden" />
            <span className="hidden xl:inline">About</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex items-center text-[16px] px-2 py-2 rounded-md transition ${
                isActive
                  ? "text-darkFive dark:text-darkFive"
                  : "text-darkOne dark:text-gray-300 hover:text-darkFive dark:hover:text-darkFive"
              }`
            }
          >
            <BiFile size={24} className="xl:hidden" />
            <span className="hidden xl:inline">Resume</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `flex items-center text-[16px] px-2 py-2 rounded-md transition ${
                isActive
                  ? "text-darkFive dark:text-darkFive"
                  : "text-darkOne dark:text-gray-300 hover:text-darkFive dark:hover:text-darkFive"
              }`
            }
          >
            <BiBriefcase size={24} className="xl:hidden" />
            <span className="hidden xl:inline">Portfolio</span>
          </NavLink>
        </li>

        <ToggleModeComponents toggleMode={toggleMode} darkMode={darkMode} />
      </ul>
    </nav>
  );
}
