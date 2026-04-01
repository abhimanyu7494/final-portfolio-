import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: "/portfolio.png",
    link: "https://abhimanyukr05.vercel.app",
  },
  {
    title: "bioscope (OTT)",
    desc: "Modern portfolio with React & Tailwind (working)",
    image: "/bioscop.png",
    link: "https://your-portfolio2-link.com",
  },
  {
    title: "E-Commerce App",
    desc: "Shopping app with cart & payment",
    image: "/dataline.png",
    link: "https://dataline.co.in",
  },
  {
    title: "attendance system ",
    desc: "working",
    image: "/1st.jpg",
    link: "https://your-chatapp-link.com",
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
          
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-xl p-[1.5px] overflow-hidden block"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 animate-borderLight bg-[linear-gradient(90deg,transparent,#28a7a9,transparent)]"></div>

            {/* Card */}
            <div className="relative bg-[#0b0b1a] rounded-xl overflow-hidden z-10">
              
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
          </a>

        ))}
      </div>
    </section>
  );
};

export default Projects;
