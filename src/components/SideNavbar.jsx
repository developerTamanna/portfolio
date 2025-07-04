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
    <div className="fixed md:top-1/2 md:h-[80%] md:-translate-y-1/2 md:right-6 z-[999] bottom-3 w-full h-fit md:w-auto right-0 space-y-4   flex md:flex-col flex-row  items-center justify-between   bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg">
      {navItems.map((item, idx) => (
        <div   key={idx} className=" group relative ">
          <NavLink to={`${item.path}`} className={({isActive}) => `${(isActive ? "text-blue-400" : " text-red-500")} hover:text-blue-400  w-fit h-fit cursor-pointer`}>
            {item.icon}
          </NavLink>
          {/* Tooltip */}
          <div className="absolute right-[120%] pr-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200 bg-black  text-sm px-2 py-1 rounded shadow-md whitespace-nowrap">
            <p className=" text-red-700">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;
