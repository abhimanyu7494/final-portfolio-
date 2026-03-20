import React from "react";
<<<<<<< HEAD
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
          {project.map((data) => (
            <div key={data.key} className="project-card" data-aos="flip-right" data-aos-duration="1000">
              <div className="card bg-white text-black">
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
=======
import ElectricBorder from "./ElectricBorder";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: "/public/4th.png",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: "/public/3rd.png",
  },
  {
    title: "E-Commerce App",
    desc: "Shopping app with cart & payment",
    image: "/public/2nd.png",
  },
  {
    title: "Chat App",
    desc: "Realtime chat using Socket.io",
    image: "/public/1st.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-20 text-white">
      
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Grid */}
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
            {/* Card */}
            <div className="bg-[#0b0b1a] rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />

              {/* Content */}
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
>>>>>>> fa1a685 (Initial commit: portfolio website)
