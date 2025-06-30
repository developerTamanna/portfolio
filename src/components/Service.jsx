import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaPaintBrush,
  FaRocket,
  FaBug,
  FaBolt,
  FaCogs,
  FaWrench,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description: "Build responsive UIs with React, Tailwind, and modern JavaScript.",
    icon: <FaCode size={30} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    description: "REST APIs, authentication systems, Node.js, Express & more.",
    icon: <FaServer size={30} />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mobile Friendly Design",
    description: "Ensure optimal user experience across all devices and screen sizes.",
    icon: <FaMobileAlt size={30} />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "UI/UX Design",
    description: "Design attractive, user-centric, intuitive UI with modern aesthetics.",
    icon: <FaPaintBrush size={30} />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Deployment & Hosting",
    description: "Deploy your app to Vercel, Firebase, or Render with CI/CD.",
    icon: <FaRocket size={30} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Bug Fixing",
    description: "Diagnose and fix bugs in frontend or backend projects efficiently.",
    icon: <FaBug size={30} />,
    color: "from-red-600 to-yellow-500",
  },
  {
    title: "Web Application Development",
    description: "Develop scalable full-stack web apps using the MERN stack.",
    icon: <FaCogs size={30} />,
    color: "from-sky-500 to-blue-700",
  },
  {
    title: "Performance Optimization",
    description: "Boost site speed with lazy loading, code splitting, and API tuning.",
    icon: <FaBolt size={30} />,
    color: "from-amber-500 to-yellow-400",
  },
  {
    title: "Problem Solving",
    description: "Write clean, efficient logic and algorithms for challenging tasks.",
    icon: <FaWrench size={30} />,
    color: "from-lime-400 to-green-600",
  },
  {
    title: "Database Design & Integration",
    description: "Design schemas, optimize queries, and integrate MongoDB/MySQL securely.",
    icon: <FaDatabase size={30} />,
    color: "from-teal-400 to-cyan-600",
  },
];


const Services = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">🛠 My Services</h2>
        <p className="text-gray-300 mb-12">
          I help clients and teams build fast, functional, and beautiful digital experiences.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 border border-white/10"
            >
              <div
                className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
