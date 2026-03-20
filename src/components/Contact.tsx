<<<<<<< HEAD
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const icons = [
    {
      link: "https://www.instagram.com/",
      icon: <FaInstagram style={{ color: "#E4405F" }} />,
    },
    {
      link: "https://www.facebook.com/",
      icon: <CiFacebook style={{ color: "#1877F2" }} />,
    },
    {
      link: "https://www.linkedin.com/",
      icon: <CiLinkedin style={{ color: "#0077B5" }} />,
    },
    {
      link: "https://twitter.com/",
      icon: <FaSquareXTwitter style={{ color: "#000" }} />,
    },
    {
      link: "https://github.com/",
      icon: <FaGithubSquare style={{ color: "#171515" }} />,
    },
    {
      link: "mailto:sabhimanyu9263@gmail.com",
      icon: <SiGmail style={{ color: "#EA4335" }} />,
    },
    {
      link: "https://wa.me/919661104667",
      icon: <SiWhatsapp style={{ color: "#25D366" }} />,
    },
  ];

  return (
    <section id="contact" className="container" style={{ padding: "80px 20px" }}>
      <h1>Contact Me</h1>

      <div
        className="contact-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "white",
              height: "70px",
              width: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              border: "2px solid rgb(70, 240, 70)",
              transition: "all 0.3s ease-in-out",
              fontSize: "2rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(70, 240, 70, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {item.icon}
          </a>
        ))}
=======
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919661104667"; // WhatsApp number in international format
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank"); // Naye tab me WhatsApp kholna
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 text-white relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-gray-400 mt-2">
          Let's build something amazing together 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {["Email", "Phone", "Location"].map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,150,0.4),0_0_30px_rgba(168,85,247,0.4),0_0_60px_rgba(59,130,246,0.3)]"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-300">
                {item === "Email"
                  ? "sabhimanyu9263@gmail.com"
                  : item === "Phone"
                  ? "+91 9661104667"
                  : "India"}
              </p>
            </div>
          ))}
        </div>

        <div className="group bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl transition duration-300 hover:shadow-[0_0_20px_rgba(255,0,150,0.4),0_0_40px_rgba(168,85,247,0.5),0_0_80px_rgba(59,130,246,0.4)]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none transition duration-300 focus:border-pink-500 hover:shadow-[0_0_10px_rgba(255,0,150,0.5),0_0_20px_rgba(255,0,150,0.4),0_0_40px_rgba(168,85,247,0.5)] focus:shadow-[0_0_15px_rgba(255,0,150,0.8),0_0_30px_rgba(255,0,150,0.7),0_0_60px_rgba(168,85,247,0.8)]"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none transition duration-300 focus:border-pink-500 hover:shadow-[0_0_10px_rgba(255,0,150,0.5),0_0_20px_rgba(255,0,150,0.4),0_0_40px_rgba(168,85,247,0.5)] focus:shadow-[0_0_15px_rgba(255,0,150,0.8),0_0_30px_rgba(255,0,150,0.7),0_0_60px_rgba(168,85,247,0.8)]"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none transition duration-300 focus:border-pink-500 hover:shadow-[0_0_10px_rgba(255,0,150,0.5),0_0_20px_rgba(255,0,150,0.4),0_0_40px_rgba(168,85,247,0.5)] focus:shadow-[0_0_15px_rgba(255,0,150,0.8),0_0_30px_rgba(255,0,150,0.7),0_0_60px_rgba(168,85,247,0.8)]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,0,150,0.6),0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(59,130,246,0.5)]"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
>>>>>>> fa1a685 (Initial commit: portfolio website)
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> fa1a685 (Initial commit: portfolio website)
