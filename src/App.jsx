import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CVModal from './components/CVModal';
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <ReactLenis root>
      {/* 2-Second Initial Preloader */}
      <Preloader />

      {/* Main Page Content */}
      <Header onOpenCV={() => setIsCVOpen(true)} />
      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />

      {/* Online CV Reader Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </ReactLenis>
  );
};

export default App;


















