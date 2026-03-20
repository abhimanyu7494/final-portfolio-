import React from "react";

const About = () => {
  return (
<<<<<<< HEAD
    <section
      id="about"
      className="container"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        margin: "40px auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#333",
          fontWeight: "700",
        }}
      >
        About Me
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        Hi, I’m{" "}
        <strong style={{ color: "#0070f3" }}>Abhimanyu Kumar Pandey</strong>, a{" "}
        <strong>Full Stack Developer</strong>. I specialize in building modern, 
        responsive web applications and love exploring new technologies to create 
        smooth and efficient user experiences. 🚀
      </p>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#666",
          marginTop: "20px",
        }}
      >
        Always learning, always coding, and always creating something new! 💻
      </p>
=======
    <section className="py-20 px-6 md:px-20 relative text-white">
      
      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[100px] bottom-10 right-10"></div>

      <div className="relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-pink-500">Me</span>
        </h2>
        <p className="text-gray-400 mb-10">Know More About Me</p>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* Stats */}
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

            {/* Description */}
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

          {/* RIGHT SIDE IMAGE */}
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
>>>>>>> fa1a685 (Initial commit: portfolio website)
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> fa1a685 (Initial commit: portfolio website)
