import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-purple-400" /> },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function TechStack() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-xl border border-zinc-700 shadow-md shadow-cyan-500/10 p-6 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.technologies.map((tech, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center p-3 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
