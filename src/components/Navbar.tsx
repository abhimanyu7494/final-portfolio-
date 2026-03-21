import React, { useState, useEffect } from "react";

const Navbar = () => {
  
  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  const [activeLink, setActiveLink] = useState("Home");

  const handleScrollTo = (link: string) => {
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-center px-4 py-3 md:px-6 md:py-4">

        <ul className="flex gap-4 md:gap-8 text-white text-xs md:text-base flex-wrap justify-center">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative cursor-pointer"
              onClick={() => handleScrollTo(link)}
            >
              <span
                className={`${
                  activeLink === link ? "text-pink-400" : "text-white"
                } hover:text-pink-400 transition`}
              >
                {link}
              </span>

              <span
                className={`
                  absolute left-0 -bottom-1 w-full h-[2px] rounded-sm
                  bg-pink-400 transition-all duration-300
                  ${
                    activeLink === link
                      ? "scale-x-100 opacity-100 shadow-[0_0_10px_#ff6ec7,0_0_20px_#ff6ec7]"
                      : "scale-x-0 opacity-0"
                  }
                  origin-left
                `}
              ></span>
            </li>
          ))}
        </ul>

<a
  href="/abhi.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="ml-6 px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
    Resume
  </button>
</a>
      </div>
    </nav>
  );
};

export default Navbar;
