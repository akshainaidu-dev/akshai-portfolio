import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // UPDATED SECTION IDS
      const sections = ['home', 'about', 'services', 'projects', 'contact'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(
              section.charAt(0).toUpperCase() + section.slice(1)
            );
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });

    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white">
      <Navbar 
        scrolled={scrolled}
        activeTab={activeTab}
        scrollTo={scrollTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero scrollTo={scrollTo} />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
