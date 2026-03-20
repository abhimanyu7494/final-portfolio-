<<<<<<< HEAD
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";

// 👇 WhatsApp Button import yaha karo
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* 👇 Ye button hamesha screen ke corner me visible rahega */}
      <WhatsAppButton />
    </>
  );
};

export default App;
=======
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Galaxy from "./components/Galaxy";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AIButton from "./components/AIButton"; // Import AI Button

function App() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">

      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy 
          density={1}
          glowIntensity={0.3}
          saturation={0.2}
          hueShift={260}
          mouseRepulsion={true}
        />
      </div>
    
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[1] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Always Visible Buttons */}
      <WhatsAppButton />
      <AIButton />

    </div>
  );
}

export default App;
>>>>>>> fa1a685 (Initial commit: portfolio website)
