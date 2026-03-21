import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 relative text-white">

      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[100px] bottom-10 right-10"></div>

      <div className="relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-pink-500">Me</span>
        </h2>
        <p className="text-gray-400 mb-10">Know More About Me</p>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">

          <div>

            <div className="flex gap-4 mb-6">
              
              <div className="flex-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white">1+</h3>
                <p className="text-sm text-gray-300">Year Experience</p>
              </div>

              <div className="flex-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white">Real Projects</h3>
                <p className="text-sm text-gray-300">MERN Stack Apps</p>
              </div>

            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> with around one year of experience in building web applications using the MERN stack. I enjoy creating user-friendly and responsive interfaces using React, and building efficient backend APIs using Node.js and Express.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I have worked on real-world projects like an e-commerce platform with an admin panel, where I handled product management, orders, and authentication.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I am always eager to learn new technologies and improve my problem-solving skills. My goal is to build scalable and impactful applications.
            </p>

          </div>

          <div className="flex justify-center">
            
            <div className="relative">

              <div className="absolute inset-0 blur-[60px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-30"></div>

              <img
                src="/your-image.png"
                alt="Abhimanyu"
                className="relative w-72 md:w-80 object-contain"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
