import React, { useState } from 'react';
import Navbar from './Navbar';
import { MdMenu, MdClose } from "react-icons/md";

const Header = ({ onOpenCV }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 bg-zinc-950/85 backdrop-blur-xl">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex justify-between items-center md:grid md:grid-cols-[1fr,auto,1fr]">
        
        {/* Name Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
            HA
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors leading-tight">
              Hassan Ali
            </span>
            <span className="text-[10px] sm:text-xs text-cyan-400 font-semibold tracking-wide">
              React Native & REST API Developer
            </span>
          </div>
        </a>

        {/* Navigation */}
        <div className="relative md:justify-self-center">
          <button 
            className="md:hidden w-10 h-10 grid place-items-center bg-zinc-800/80 rounded-xl text-white hover:bg-zinc-700 transition-all border border-zinc-700/50" 
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="text-2xl">
              {navOpen ? <MdClose /> : <MdMenu />}
            </span>
          </button>

          <Navbar navOpen={navOpen} closeNav={() => setNavOpen(false)} />
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3 md:justify-self-end">
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-zinc-950 shadow-md shadow-cyan-500/20 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;