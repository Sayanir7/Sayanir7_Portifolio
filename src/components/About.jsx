import React from "react";
import { UserRound } from "lucide-react";
import Education from "./Education";
import { motion } from "framer-motion";
import mypic from "../assets/me-full.JPG";

export default function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_#0f0f0f_0%,_#000000_100%)] py-10 px-6 md:px-20">
      <div className="max-w-8xl  flex flex-col gap-24">
        {/* Title */}
        {/* <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-b border-cyan"
        >
          <h2 className="text-5xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_4px_#00FFFF99]">
            About Me
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            A quick glance at who I am and where I’ve been
          </p>
        </motion.div> */}

        {/* Profile + Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-black/40 via-slate-900/40 to-black/10 border border-cyan-500/20 backdrop-blur-lg rounded-md p-8 shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-500"
          >
            <div className="h-full flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              {/* Full-body image */}
              <div className=" h-full w-full md:w-1/2 flex justify-center">
                <img
                  src={mypic}
                  alt="Sayan Roy"
                  className="h-full w-auto object-cover rounded-full p-2 border-sm border-cyan-500/40 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-extrabold text-white mb-2">
                  Hi, I'm <span className="text-cyan-400">Sayan Roy</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  An Electronics and Communication Engineering student at IIT
                  Guwahati with a drive for building scalable full-stack apps,
                  elegant interfaces, and exploring bleeding-edge tech.
                </p>
                <p className="mt-4 text-sm text-cyan-300 italic">
                  {/* Skills: React, Tailwind CSS, Node.js, Flutter, Python, Machine
                  Learning */}
                  Programmer | Developer | Engineer | Tech Enthusiast 
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full max-h-fit bg-gradient-to-br from-black/40 via-slate-900/40 to-black/10 border border-cyan-500/20 backdrop-blur-lg rounded-md p-4 shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl md:text-3xl text-center font-semibold text-cyan-400 mb-4 border-b border-cyan-400/30 pb-2">
                Education
              </h4>
              <Education />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
