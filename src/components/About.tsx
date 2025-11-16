import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const About = () => {

  return (
    <section id="about" className="container" style={{ padding: "80px 20px" }}>
      <h1>About Me</h1>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "800px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
        }}
      >
        Hi, I’m <strong>Abhimanyu Kumar Pandey</strong>, a Full Stack Developer.
        I love building responsive web applications and exploring new
        technologies to enhance performance and user experience.
      </p>

      <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>My Skills</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90px",
              padding: "10px",
              borderRadius: "10px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "2.5rem" }}>{skill.icon}</div>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>Experience</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        {experiences.map((exp, index) => (
          <li key={index}>• {exp}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;
