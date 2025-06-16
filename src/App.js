import React, { useEffect, useRef, useState } from 'react';
import './styles/main.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfiniteMenu from './components/InfiniteMenu';
import projectsData from './data/projectsData';
import * as fm from './utils/functionModules';

function App() {
  const vantaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Vanta + all init modules
  useEffect(() => {
    if (window.VANTA?.WAVES && window.THREE) {
      window.vantaEffect = window.VANTA.WAVES({
        el: "#vanta-bg",
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        forceAnimate: true,
        pixelRatio: window.devicePixelRatio || 1,

        waveSpeed: 2,
        waveHeight: 20,
        shininess: 50,
        zoom: 0.85,
        distortion: 3.5,
        distortionSpeed: 0.8,
        frequency: 0.01,

        color: 0x00172e,
        color2: 0x2a006e,
        hue: 215,
        saturation: 50,
        brightness: 5,
        blendMode: 0.8,
        alpha: 0.9
      });
    }

    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) fm.initScrollTop(scrollTopBtn);

    fm.initMobileMenu();
    fm.initStickyHeader();
    fm.initSkillsAnimation();
    fm.initScrollAnimations();
    fm.initScrollProgress();
    fm.initContactForm();
    fm.initButtonEffects();
    fm.initHeroAnimations();
    fm.initGlareHover();
    fm.createGlobalClickSparks?.();
    fm.applyTrueFocusToDiv('myFocusText', {
      blurAmount: 4,
      borderColor: 'blue',
      glowColor: 'rgba(0, 0, 255, 0.5)',
      animationDuration: 0.4
    });
    fm.renderProjects();
    fm.initProjectShowcase();

    return () => {
      if (window.vantaEffect) window.vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div id="vanta-bg" ref={vantaRef}></div>
      <div className="main-content">
        <Header />
        <Hero />
        <About />
        <Skills />
        {isMobile ? (
          <Projects />
        ) : (
          <section id="projects" className="infinite-projects-section">
            <h2 className="section-title">My Projects</h2>
            <div style={{ backgroundColor: 'transparent', height: '100vh', width: '100vw' }}>
              <InfiniteMenu items={projectsData} />
            </div>
          </section>
        )}
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <button className="scroll-top">⬆</button>
      </div>
    </>
  );
}

export default App;
