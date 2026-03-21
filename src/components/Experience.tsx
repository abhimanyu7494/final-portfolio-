import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    year: "2024 - Present",
    desc: "Built full-stack web applications using the MERN stack. Developed an e-commerce platform with admin panel, product management, authentication (JWT), and API integration using React, Node.js, Express, and MongoDB.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Self Projects",
    year: "2023 - 2024",
    desc: "Created responsive and user-friendly web interfaces using React and Tailwind CSS. Worked on reusable components, routing, and UI optimization for better user experience.",
  },
  {
    role: "Web Development Learner",
    company: "Self Learning",
    year: "2022 - 2023",
    desc: "Started my web development journey by learning HTML, CSS, and JavaScript. Built small projects to understand core concepts like DOM, events, and API integration.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 text-white relative"
    >
     
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 mt-2">My Journey</p>
      </div>

      <div className="relative">
      
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-white/10 transform -translate-x-1/2"></div>

        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-transparent blur-[10px] opacity-90 transform -translate-x-1/2"></div>

        <div className="absolute left-1/2 top-0 w-[6px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-transparent blur-[20px] opacity-50 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-1">
                  {exp.role}
                </h3>

                <p className="text-pink-400 text-sm mb-1">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm mb-3">
                  {exp.year}
                </p>

                <p className="text-gray-300 text-sm">
                  {exp.desc}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center w-10 h-10">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>

              <div className="absolute w-8 h-8 bg-pink-500 opacity-30 rounded-full animate-ping"></div>
            </div>

            <div className="w-full md:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
