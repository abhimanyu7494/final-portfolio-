<<<<<<< HEAD
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="container ex" style={{ padding: "80px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Experience</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {experience.map((data) => (
          <div
            key={data.id}
            className="ex-items"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "white",
              border: "1px solid rgb(70, 240, 70)",
              boxShadow: "5px 5px 10px rgba(101,175,10,0.3)",
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{data.role}</h2>
            <h4 style={{ marginBottom: "15px", color: "#555" }}>
              <span>{data.startDate} - {data.endDate}</span> |{" "}
              <span>{data.location}</span>
            </h4>
            {data.experiences.map((exp, i) => (
              <p key={i} style={{ margin: "5px 0", color: "#333" }}>
                • {exp}
              </p>
            ))}
=======
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
      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 mt-2">My Journey</p>
      </div>

      {/* 🔥 Timeline */}
      <div className="relative">
        {/* 🔥 Line */}
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-white/10 transform -translate-x-1/2"></div>

        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-transparent blur-[10px] opacity-90 transform -translate-x-1/2"></div>

        <div className="absolute left-1/2 top-0 w-[6px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-transparent blur-[20px] opacity-50 transform -translate-x-1/2"></div>

        {/* 🔥 Items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
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

            {/* 🔥 DOT */}
            <div className="relative z-10 flex items-center justify-center w-10 h-10">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>

              <div className="absolute w-8 h-8 bg-pink-500 opacity-30 rounded-full animate-ping"></div>
            </div>

            {/* Empty side */}
            <div className="w-full md:w-1/2"></div>
>>>>>>> fa1a685 (Initial commit: portfolio website)
          </div>
        ))}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Experience;
=======
export default Experience;
>>>>>>> fa1a685 (Initial commit: portfolio website)
