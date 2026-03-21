import React from "react";
import ElectricBorder from "./ElectricBorder";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: "/4th.png",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: "/3rd.png",
  },
  {
    title: "E-Commerce App",
    desc: "Shopping app with cart & payment",
    image: "/2nd.png",
  },
  {
    title: "Chat App",
    desc: "Realtime chat using Socket.io",
    image: "/1st.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-20 text-white">

      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <ElectricBorder
            key={i}
            color="#28a7a9"
            speed={1}
            chaos={0.15}
            borderRadius={20}
            className="p-[1.5px]"
          >
           
            <div className="bg-[#0b0b1a] rounded-lg overflow-hidden">
             
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />

              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {project.desc}
                </p>
              </div>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </section>
  );
};

export default Projects;
