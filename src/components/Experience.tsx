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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
