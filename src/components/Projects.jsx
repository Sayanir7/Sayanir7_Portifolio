import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
// import vid1 from "../assets/projects_vids/virat_trim.mp4";
// import geoVid from "../assets/projects_vids/geo_attendance.mp4"; // ✅ Make sure this exists

const projects = [
  {
    title: "CF Submitter", 
    description:"an vscode + chrome extension to show, run test cases, and submit all questions of a contest directly to codeforces, all without leaving vscode.",
    tech: ["TypeScript","vsce yo"],

    repo:"https://github.com/Sayanir7/codesubmit",
    live:"https://marketplace.visualstudio.com/items?itemName=DevXSayan.cf-submitter",

  },
  {
    title: "College Help Bot",
    description:
      "AI chatbot for campus queries. Trained ML model with FastAPI backend, React frontend.",
    tech: ["React", "FastAPI", "Python", "scikit-learn", "spaCy"],
    
    repo: "https://github.com/Sayanir7/College-Help-Bot",
    live: "https://iitg-chatbot-seven.vercel.app/",
  },
  {
    title: "Text-to-Website Generator",
    description:
      "AI-powered tool to generate websites from natural language using GrapesJS editor and OpenAI API.",
    tech: ["React", "GrapesJS", "OpenAI API"],
    
    repo: "https://github.com/Sayanir7/webcraft",
    live: "https://webcraft-sayanir7.vercel.app/",
  },
  {
    title: "Resume Builder SWC",
    description:
      "Code free resume generation platform for IITG students, feature include enabling live preview and downloadable PDF resumes.",
    tech: ["React", "Node", "Express", "Docker", "Latex"],
    
    repo: "https://github.com/swciitg/resume-builder",
    live: "https://swc.iitg.ac.in/resume-builder/",
  },
  {
    title: "Attendance Tracker App",
    description:
      "Flutter app to automate attendance based on geolocation and secure backend storage.",
    tech: ["Flutter", "MongoDB", "Node.js"],
    
    repo: "https://github.com/Sayanir7/Attendance_tracker",
  },
  // {
  //   title: "AI Cricket Commentator",
  //   description:
  //     "AI model to generate ball-by-ball commentary by analyzing video frames and predicting shots.",
  //   tech: ["Python", "OpenCV", "TensorFlow"],
    
  //   repo: "https://github.com/your-repo/ai-cricket-commentator",
  //   live: "https://your-live-link.com/ai-cricket-commentator",
  // },
  // {
  //   title: "Library Seat Monitor",
  //   description:
  //     "CCTV-based seat detection system to monitor empty seats in a library using computer vision.",
  //   tech: ["Python", "OpenCV", "YOLO"],
    
  //   repo: "https://github.com/your-repo/library-seat-monitor",
  //   live: "https://your-live-link.com/library-seat-monitor",
  // },

  {
    title: "Chat App",
    description:
      "Realtime chat application with stylish UI, user authentication, and private messaging.",
    tech: ["React", "WEBRTC", "Tailwind CSS"],
    
    repo: "https://github.com/Sayanir7/chatting-webrtc",
    live: "https://chatting-webrtc.vercel.app/",
  },
  {
    title: "Movie Sync Platform",
    description:
      "Platform to watch movies/shows in sync with others while chatting live.",
    tech: ["React", "Socket.IO", "Node.js"],
    
    repo: "https://github.com/your-repo/movie-sync",
    live: "https://your-live-link.com/movie-sync",
  },
];

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen flex bg-[radial-gradient(ellipse_at_top,_#0f0f0f_0%,_#000000_100%)] text-white font-sans px-6 md:px-20">
      {/* Left Sticky Section */}
      <div className="w-1/3 hidden md:flex flex-col justify-center px-10 sticky top-0 h-screen border-r border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-cyan-400 mb-6"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-300 text-base leading-relaxed">
          A curated collection of my technical works in web, mobile, and ML.
          Hover over the cards to preview in action.
        </p>
      </div>

      {/* Right Scrollable Projects Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3 md:pl-6 py-12">
        {/* Mobile Header */}
        <div className="md:hidden pt-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-cyan-400 mb-4"
          >
            My Projects
          </motion.h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            A curated collection of my technical works in web, mobile, and ML.
            Hover over the cards to preview in action.
          </p>
        </div>

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative group h-[300px] overflow-hidden rounded-2xl border border-white/10 shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300"
          >
            {/* Background Video */}
            <video
              src={project.video}
              className="absolute h-full w-full object-cover top-0 left-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"
              loop
              muted
              playsInline
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border border-cyan-400 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                {project.live && project.live.trim() !== "" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
