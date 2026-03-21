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
import AIButton from "./components/AIButton"; 

function App() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Galaxy 
          density={1}
          glowIntensity={0.3}
          saturation={0.2}
          hueShift={260}
          mouseRepulsion={true}
        />
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[1] pointer-events-none"></div>

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

      <WhatsAppButton />
      <AIButton />

    </div>
  );
}

export default App;
