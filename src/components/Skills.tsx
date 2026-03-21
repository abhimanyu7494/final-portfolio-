import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 85, icon: <FaJs /> },
  { name: "React", level: 80, icon: <FaReact /> },
  { name: "Tailwind", level: 85, icon: <SiTailwindcss /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb /> },
  { name: "MySQL", level: 70, icon: <SiMysql /> },
  { name: "Java", level: 65, icon: <FaJava /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-16 text-white">

      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 mt-2">What I Know</p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
        
        {skills.map((skill, index) => {
          const radius = 45;
          const stroke = 8;
          const normalizedRadius = radius - stroke * 0.5;
          const circumference = normalizedRadius * 2 * Math.PI;
          const strokeDashoffset =
            circumference - (skill.level / 100) * circumference;

          return (
            <div key={index} className="flex flex-col items-center gap-3">

              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                
                <svg height="100%" width="100%" className="rotate-[-90deg]">
                  <circle
                    stroke="#1f2937"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    stroke="url(#gradient)"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx="50%"
                    cy="50%"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl">
                  {skill.icon}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
