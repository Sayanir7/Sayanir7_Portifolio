import React, { useRef, useState, useEffect } from "react";
import {
  Home,
  UserRound,
  BriefcaseBusiness,
  Layers,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", icon: Home },
  { label: "About", icon: UserRound },
  { label: "Portfolio", icon: BriefcaseBusiness },
  { label: "TechStack", icon: Layers },
  { label: "Contact", icon: MessageCircle },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  const getTabRef = (label) => {
    if (!tabRefs.current[label]) {
      tabRefs.current[label] = React.createRef();
    }
    return tabRefs.current[label];
  };

  const handleClick = (label) => {
    setActiveTab(label);
    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const activeRef = tabRefs.current[activeTab];
    if (activeRef?.current) {
      const rect = activeRef.current.getBoundingClientRect();
      const parentRect = activeRef.current.parentElement.getBoundingClientRect();

      setHighlightStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [activeTab]);

  return (
    <nav className="w-full md:w-1/2 hidden md:block mx-auto mt-4 bg-black/30 border border-zinc-700 backdrop-blur-lg shadow-md p-2 rounded-md sticky top-0 z-50">
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <motion.div
          className="absolute top-0 h-full w-full bg-zinc-700 border border-zinc-700 rounded-md border-white/20 bg-black/20 backdrop-blur-lg shadow-lg shadow-cyan-500/50"

          animate={highlightStyle}
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
        />

        {tabs.map(({ label, icon: Icon }) => (
          <div
            key={label}
            ref={getTabRef(label)}
            onClick={() => handleClick(label)}
            className={`flex items-center px-4 py-2 space-x-2 text-sm md:text-base font-semibold cursor-pointer relative z-10 ${
              activeTab === label ? "text-white" : "text-zinc-400"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
