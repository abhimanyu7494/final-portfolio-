import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919661104667"; 
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank"); 
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
      </div>
    </section>
  );
};

export default Contact;
