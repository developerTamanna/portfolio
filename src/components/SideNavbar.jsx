import {
  FaUser,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaCommentDots,
  FaHome,
  FaFileAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const navItems = [
  { icon: <FaHome size={20} />, label: "Home" ,path: "/"},
  { icon: <FaUser size={20} />, label: "About" ,path: "/about"},
  { icon: <FaProjectDiagram size={20} />, label: "Projects" ,path: "/projects"},
  { icon: <FaServicestack size={20} />, label: "Services" ,path: "/services"},
  { icon: <FaCommentDots size={20} />, label: "Testimonials" ,path: "/testimonials"},
  { icon: <FaEnvelope size={20} />, label: "Contact" ,path: "/contact"},
  { icon: <FaFileAlt size={20} />, label: "Resume" ,path: "/resume"},
];

const SideNavbar = () => {
  return (
    <div className="fixed top-1/2 h-[80%] -translate-y-1/2 right-6 z-20 space-y-4 flex flex-col items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg">
      {navItems.map((item, idx) => (
        <NavLink to={`${item.path}`}  key={idx} className={({isActive}) => `${(isActive ? "text-blue-400" : " text-red-500")} group relative flex items-center`}>
          <div className=" hover:text-blue-400 text-inherit cursor-pointer"> 
            {item.icon}
          </div>
          {/* Tooltip */}
          <div className="absolute right-[120%] pr-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200 bg-black  text-sm px-2 py-1 rounded shadow-md whitespace-nowrap">
            <p className=" text-red-700">{item.label}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNavbar;
