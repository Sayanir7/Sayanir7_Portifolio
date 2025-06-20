import React from "react";
import { motion } from "framer-motion";
import iitglogo from "../assets/iitg_logo.jpg";
import zilllogo from "../assets/zilla.gif";
import vhslogo from "../assets/vhs.jfif"; // Update this to the correct path

const educationData = [
  {
    year: "2023-present",
    logo: iitglogo, // ✅ directly use the imported image
    school: "Indian Institute of Technology, Guwahati",
    degree: "B.Tech, Electronics and Communication Engineering",
    description:
      "Studying core electronics, communication systems, embedded programming, and developing full-stack software and AI projects in one of India's premier tech institutes.",
  },
  {
    year: "2021-2023",
    logo: zilllogo,
    school: "Jalpaiguri Zilla School",
    degree: "12th Board",
    description:
      "Focused on physics, chemistry, and mathematics with competitive preparation for JEE Advanced, developing strong problem-solving and analytical skills.",
  },
  {
    year: "2015-2021",
    logo: vhslogo,
    school: "Vivekananda High School",
    degree: "Matric (10th Board)",
    description:
      "Foundation of academic growth and discipline with a consistent record of academic excellence, science fair participation, and curiosity in technology.",
  },
];

export default function EducationSection() {
  return (
    <div className="min-h-fit  text-white px-2 py-4">
      <div className="max-w-6xl mx-auto">
        {/* <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          My Education
        </motion.h2> */}

        <div className="space-y-7">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              // viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-md hover:shadow-cyan-600/20 transition-shadow duration-300"
            >
              {/* Year */}
              <div className="flex-shrink-0 text-xl font-bold text-cyan-300 w-24 text-center mt-2 md:mt-0">
                {edu.year}
              </div>

              {/* Logo */}
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-cyan-400 shadow-md"
              />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {edu.school}
                </h3>
                <h4 className="text-md text-cyan-200 font-medium mb-2">
                  {edu.degree}
                </h4>
                {/* Optional Description */}
                {/* <p className="text-gray-300 text-sm md:text-base text-justify leading-relaxed">
                  {edu.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
