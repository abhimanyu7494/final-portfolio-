import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">

      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

          <div className="text-white text-center md:text-left flex flex-col items-center md:items-start">
            
            <h2 className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
              Hi, I'm
            </h2>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-viner">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Abhimanyu
              </span>
            </h1>

            <div className="text-gray-300 mb-6 text-center md:text-left space-y-2 md:space-y-3 leading-snug sm:leading-normal md:leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-md md:max-w-lg">
              <p>
                A Full Stack Developer specializing in building modern web applications using React and Node.js.
              </p>
              <p>
                I build scalable, user-friendly applications with clean and efficient code.
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
              
              <a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition transform duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-center rounded-full border border-white hover:bg-white hover:text-black transition transform duration-300"
              >
                Contact Me
              </a>

            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-0">
            <img
              src="/your-image.png"
              alt="Abhimanyu"
              className="w-52 sm:w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;