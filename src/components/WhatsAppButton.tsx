<<<<<<< HEAD
import React, { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes strongGlow {
        0% {
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.8),
                      0 0 30px rgba(37, 211, 102, 0.6),
                      0 0 45px rgba(37, 211, 102, 0.4);
        }
        50% {
          box-shadow: 0 0 25px rgba(37, 211, 102, 1),
                      0 0 50px rgba(37, 211, 102, 0.9),
                      0 0 70px rgba(37, 211, 102, 0.8);
        }
        100% {
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.8),
                      0 0 30px rgba(37, 211, 102, 0.6),
                      0 0 45px rgba(37, 211, 102, 0.4);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles: { button: React.CSSProperties; icon: React.CSSProperties } = {
    button: {
      position: "fixed",
      width: "65px",
      height: "65px",
      bottom: "100px",
      right: "50px",
      backgroundColor: "#25D366",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      zIndex: 1000,
      textDecoration: "none",
      animation: "strongGlow 2s infinite ease-in-out",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    icon: {
      margin: 0,
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1.3)";
    e.currentTarget.style.boxShadow =
      "0 0 40px rgba(37, 211, 102, 1), 0 0 70px rgba(37, 211, 102, 1), 0 0 100px rgba(37, 211, 102, 0.9)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "";
  };

=======
import React from "react";

const WhatsAppButton = () => {
>>>>>>> fa1a685 (Initial commit: portfolio website)
  return (
    <a
      href="https://wa.me/919661104667"
      target="_blank"
      rel="noopener noreferrer"
<<<<<<< HEAD
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SiWhatsapp style={styles.icon} />
=======
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg shadow-green-400/60 ring-1 ring-green-400/50 cursor-pointer
                 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.874 11.874 0 0012 0C5.372 0 0 5.373 0 12c0 2.115.555 4.103 1.523 5.845L0 24l6.39-1.676A11.888 11.888 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.243-6.203-3.48-8.52zm-8.52 18.27c-2.09 0-4.06-.55-5.78-1.504l-.414-.25-3.797.995.995-3.792-.257-.412A9.968 9.968 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.233-7.197c-.285-.143-1.684-.831-1.944-.927-.26-.094-.448-.142-.636.143-.186.285-.72.926-.882 1.116-.162.19-.324.214-.608.071-.285-.143-1.204-.443-2.296-1.416-.849-.756-1.42-1.689-1.588-1.975-.165-.285-.018-.439.125-.582.128-.127.285-.33.428-.495.143-.166.19-.285.285-.476.094-.19.047-.357-.024-.495-.071-.142-.636-1.536-.872-2.105-.23-.553-.464-.479-.636-.488-.162-.008-.35-.01-.536-.01s-.495.071-.756.357c-.26.285-.995.97-.995 2.364 0 1.393 1.02 2.742 1.162 2.931.143.19 2.01 3.07 4.872 4.308.681.294 1.21.47 1.623.602.682.214 1.303.184 1.794.112.548-.078 1.684-.688 1.922-1.354.237-.666.237-1.235.166-1.354-.071-.119-.26-.19-.545-.333z" />
      </svg>
>>>>>>> fa1a685 (Initial commit: portfolio website)
    </a>
  );
};

<<<<<<< HEAD
export default WhatsAppButton;
=======
export default WhatsAppButton;
>>>>>>> fa1a685 (Initial commit: portfolio website)
