import React from "react";

const About = () => {
  return (
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
    </section>
  );
};

export default About;
