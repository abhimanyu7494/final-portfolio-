import React from "react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "InternPe",
    year: "2024",
    desc: "Worked as a Web Development Intern and learned frontend and backend development concepts.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Apex Planet",
    year: "2024",
    desc: "Worked on full stack development and gained experience in building web applications.",
  },
  {
    role: "Full Stack Developer",
    company: "Dataline Imagine Technology Pvt. Ltd., Bihar",
    year: "June 2025 - December 2025",
    desc: "Developed web applications using MERN stack. Worked on frontend and backend, built APIs, and improved performance and functionality.",
  },
  {
    role: "Full Stack Developer",
    company: "Ajeevika Nidhi Limited",
    year: "January 2026 - February 2026",
    desc: "Worked on MERN stack applications. Handled backend logic, database, API integration, and debugging to ensure smooth performance.",
  },
  {
    role: "Self Learning",
    company: "Personal Development",
    year: "March 2026 - Present",
    desc: "Improving coding skills, learning new concepts, and working on personal projects.",
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
