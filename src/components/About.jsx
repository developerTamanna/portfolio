import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaCuttlefish,
  FaGithub, FaLock, FaBrain, FaFire, FaKey
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress, SiFirebase, SiMysql, SiCplusplus,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
     {
    category: "Frontend",
    color: "text-blue-400",
    items: [
      { icon: <FaHtml5 />, label: "HTML", level: 90 },
      { icon: <FaCss3Alt />, label: "CSS", level: 85 },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", level: 90 },
      { icon: <FaJsSquare />, label: "JavaScript", level: 80 },
      { icon: <FaReact />, label: "React.js", level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "text-green-400",
    items: [
      { icon: <FaNodeJs />, label: "Node.js", level: 80 },
      { icon: <SiExpress />, label: "Express.js", level: 80 },
      { icon: <SiMongodb />, label: "MongoDB", level: 75 },
      { icon: <SiMysql />, label: "MySQL", level: 70 },
      { icon: <FaPhp />, label: "PHP", level: 60 },
      { icon: <SiFirebase />, label: "Firebase", level: 80 },
      { icon: <FaKey />, label: "JWT", level: 75 },
    ],
  },
  {
    category: "Others",
    color: "text-yellow-400",
    items: [
      { icon: <FaCuttlefish />, label: "C", level: 90 },
      { icon: <SiCplusplus />, label: "C++", level: 85 },
      { icon: <FaBrain />, label: "AI Tools & ChatGPT", level: 95 },
      { icon: <FaFire />, label: "Problem Solving", level: 90 },
      { icon: <FaGithub />, label: "Git & GitHub", level: 80 },
      { icon: <FaLock />, label: "Authentication", level: 80 },
    ],
  },
];
const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Sylhet International University",
    year: "Running (1rd semester)",

  },
  {
    degree: "HSC - Equivalent",
    institution: "Sylhet Polytechnic Institute",
    year: "Year Passed: 2024",
  },
];
const awards = [
  "🏆 Winner - Inter University Hackathon 2024",
  "🎖️ Top 10 in National Web Dev Challenge",
  "📜 100+ LeetCode Problems Solved"
];
const achievements = [
  "🚀 Built 10+ Full-stack Projects",
  "💡 AI Automation using ChatGPT",
  "🎓 Self-taught MongoDB, Express, and Firebase"
];

const SkillsAndMore = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
      {skills.map((section, index) => (
        <div key={index} className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h3 className={`text-2xl font-bold ${section.color} mb-4`}>🧠 {section.category}</h3>
          <ul className="space-y-4">
            {section.items.map((skill, i) => (
              <li key={i}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2 text-gray-200 text-lg">
                    {skill.icon} {skill.label}
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-red-500 to-yellow-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="text-left space-y-6">
      {education.map((edu, i) => (
        <div key={i} className="bg-white/10 p-4 rounded shadow">
          <h4 className="text-xl font-semibold text-blue-300">{edu.degree}</h4>
          <p className="text-gray-300">{edu.institution}</p>
          <p className="text-gray-400">{edu.year}</p>
          {edu.cgpa && <p className="text-green-400">{edu.cgpa}</p>}
        </div>
      ))}
    </div>
  );

  const renderList = (title, items) => (
    <ul className="text-left space-y-3 list-disc pl-5">
      {items.map((item, i) => (
        <li key={i} className="text-gray-300">{item}</li>
      ))}
    </ul>
  );

  return (
    <section className="w-full min-h-full  ">
      <div className="max-w-6xl mx-auto text-center">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["skills", "education", "awards", "achievements"].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full border border-gray-600 hover:bg-white/10 transition ${
                activeTab === tab ? "bg-red-500 text-white" : "text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "skills" && renderSkills()}
            {activeTab === "education" && renderEducation()}
            {activeTab === "awards" && renderList("Awards", awards)}
            {activeTab === "achievements" && renderList("Achievements", achievements)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsAndMore;
