import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative scroll-smooth">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full top-0 z-50"
      >
        <Navbar />
      </motion.div>

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Project /></section>
      <section id="techstack"><TechStack/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}

export default App;
