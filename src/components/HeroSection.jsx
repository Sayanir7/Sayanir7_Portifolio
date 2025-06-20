import React from "react";
import { MapPin } from "lucide-react";
import logo from "../assets/me-face.JPG";
import { motion } from "framer-motion";
import iitg from "../assets/iitg_main2.jpg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_#0f0f0f_0%,_black_100%)] text-white overflow-hidden">

      {/* Left Section: Text */}
      <div className="flex flex-col justify-center items-start px-6 md:px-20 py-12 md:py-0 w-full md:w-3/4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg flex items-center md:text-xl text-cyan-400 mb-8"
        >
          <MapPin className="h-4 w-4 mr-2" />
          IIT Guwahati
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
        >
          Full-Stack{" "}
          <img
            src={logo}
            alt="icon"
            className="w-12 h-12 rounded-full inline mx-2 border-2 border-cyan-400 shadow-cyan-500/30 shadow"
          />
          Developer by day,
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-cyan-300"
        >
          Vengeance by night
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-md md:text-lg text-zinc-300 max-w-2xl mb-8 backdrop-blur-sm bg-white/5 p-4 rounded-xl leading-relaxed"
        >
          I craft intuitive digital experiences during the daylight hours, and
          moonlight as a creative force of innovation after dark.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
            Download CV
          </button>
          <button className="bg-transparent border border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-300 font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Right Semicircle with IITG Background */}
      <div className="relative w-full md:w-1/4 h-64 md:h-auto overflow-hidden">
        <div
          className="absolute md:static top-0 right-0 w-full h-full md:rounded-l-[100%] bg-cover bg-center shadow-xl"
          style={{
            backgroundImage: `url(${iitg})`,
          }}
        >
          {/* Optional gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent md:rounded-l-[100%]" />
        </div>
      </div>
    </div>
  );
}
