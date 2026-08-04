import React, { useState } from 'react';
import { HiEye, HiArrowNarrowRight, HiPlay } from 'react-icons/hi';

const Hero = ({ onOpenCV }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="home" className="pt-28 pb-8 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-24 relative overflow-hidden bg-zinc-950">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6 shadow-md shadow-emerald-500/5">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="text-xs font-semibold text-zinc-300 tracking-wide">
                Available for Mobile & Web Projects
              </span>
            </div>

            {/* Production-Level Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Cross-Platform Mobile App Architect
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-200">
                Specialized in React Native CLI, Firebase, REST APIs, Git & GitHub
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Engineering high-performance mobile applications using <span className="text-cyan-300 font-semibold">React Native CLI</span>, real-time cloud backends with <span className="text-amber-400 font-semibold">Firebase</span> (Auth & Firestore), state management with <span className="text-purple-400 font-semibold">Redux Toolkit</span>, scalable <span className="text-emerald-300 font-semibold">REST APIs</span> <span className="text-orange-400 font-semibold">Git</span> version control & <span className="text-zinc-200 font-semibold">GitHub</span> online platform for repository publishing.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4">
              <a
                href="#work"
                className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-zinc-950 font-bold text-xs sm:text-base transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-1.5 sm:gap-2 group active:scale-95 whitespace-nowrap"
              >
                <span>View Featured Projects</span>
                <HiArrowNarrowRight className="text-sm sm:text-lg group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <button
                onClick={onOpenCV}
                className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-base border border-zinc-700/80 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 active:scale-95 shadow-md shadow-zinc-900/50 group whitespace-nowrap"
              >
                <HiEye className="text-sm sm:text-lg text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>See CV</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE MEDIA SHOWCASE - Card width fits 9:16 video ratio exactly */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group w-fit mx-auto">
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-xl transition duration-500"></div>

              {/* Main Media Card - Fits Video Width Perfectly */}
              <div className="relative rounded-[32px] overflow-hidden bg-zinc-900 border-4 border-zinc-800 shadow-2xl w-fit">
                
                {/* Header bar */}
                <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-extrabold text-xs flex items-center justify-center shadow-sm shrink-0">
                      HA
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white leading-tight truncate">Featured Demo</h4>
                      <p className="text-[10px] text-cyan-400 font-semibold truncate">Tech Mart App</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold shrink-0">
                    React Native
                  </span>
                </div>

                {/* Video Container - Exact 9:16 Video Fit with inner padding so bottom tabs sit comfortably */}
                <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] bg-zinc-950 overflow-hidden flex items-center justify-center p-1 pb-2">
                  <video
                    src="/assets/videos/Tech_Mart.mp4"
                    controls={isPlaying}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain mx-auto my-auto block rounded-lg"
                    onPlay={() => setIsPlaying(true)}
                  />
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-cyan-500/90 text-zinc-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-300 z-10"
                    >
                      <HiPlay className="text-2xl translate-x-0.5" />
                    </button>
                  )}
                </div>

                {/* Footer caption - Shifted down with clear padding */}
                <div className="px-4 py-3.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs gap-2">
                  <span className="text-zinc-400 font-medium truncate">Recorded App Demo</span>
                  <a href="#work" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 shrink-0">
                    All Projects &rarr;
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;