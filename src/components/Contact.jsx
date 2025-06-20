import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-black text-white px-6 md:px-20 pt-16 pb-8 border-t border-zinc-700"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-10"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-3  gap-10 mb-10">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-cyan-300">Sayan Roy</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            B.Tech, ECE @ IIT Guwahati <br />
            West Bengal, India
          </p>
          <p className="text-gray-400 text-sm">
            <FaEnvelope className="inline-block mr-2 text-cyan-400" />
            <a
              href="mailto:sayan.roy@example.com"
              className="hover:underline text-cyan-400"
            >
              sayan.roy@example.com
            </a>
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-fit"
        >
          <h3 className="text-xl font-semibold text-cyan-300">Connect</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://github.com/your-github"
              target="_blank"
              className="flex items-center gap-2 hover:text-cyan-400 transition-text duration-500"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              className="flex items-center gap-2 hover:text-cyan-400 transition-text duration-500"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              className="flex items-center gap-2 hover:text-cyan-400 transition-text duration-500"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 text-sm bg-zinc-800 border border-zinc-600 rounded-md focus:outline-none focus:border-cyan-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 text-sm bg-zinc-800 border border-zinc-600 rounded-md focus:outline-none focus:border-cyan-500"
          />
          <textarea
            rows={3}
            placeholder="Message"
            className="w-full px-3 py-2 text-sm bg-zinc-800 border border-zinc-600 rounded-md focus:outline-none focus:border-cyan-500"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-4 py-2 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>

      {/* Footer Base */}
      <div className="border-t border-zinc-700 pt-6 text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Sayan Roy. All rights reserved.
      </div>
    </footer>
  );
}
