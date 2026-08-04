import React from 'react';
import { FaGraduationCap, FaCode } from 'react-icons/fa';
import { SiFirebase, SiRedux, SiGit } from 'react-icons/si';
import { HiCode, HiDeviceMobile } from 'react-icons/hi';

const About = () => {
  const stats = [
    { label: 'Completed Projects', value: '5+' },
    { label: 'Years Experience', value: '1.5+' },
    { label: 'Mobile Apps Built', value: '5+' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
            About Me
          </h2>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
            Architecting Seamless Mobile & Web User Experiences
          </h3>
        </div>

        {/* Main Card */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-zinc-900/80 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bio Text */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
                I am <strong className="text-white font-bold">Hassan Ali</strong>, a passionate <span className="text-cyan-400 font-bold">React Native CLI</span>, <span className="text-amber-400 font-bold">Firebase</span>, and <span className="text-emerald-400 font-bold">REST API Developer</span> focused on building high-performance, cross-platform mobile apps and dynamic web applications.
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                With expertise in React Native Community packages, real-time backend infrastructure with <span className="text-amber-400 font-semibold">Firebase</span> (Authentication & Firestore), state management with <span className="text-purple-400 font-semibold">Redux Toolkit</span>, and robust <span className="text-zinc-200 font-medium">RESTful API integration</span>, I have successfully delivered <strong className="text-white">5+ completed production projects</strong>.
              </p>

              {/* Skill Highlights Pills */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
                  <HiDeviceMobile className="text-sm text-cyan-400" /> React Native CLI
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                  <SiFirebase className="text-sm text-amber-400" /> Firebase Auth & Firestore
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-purple-300 text-xs font-semibold flex items-center gap-1.5">
                  <SiRedux className="text-sm text-purple-400" /> Redux Toolkit
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                  <HiCode className="text-sm text-emerald-400" /> REST API Integration
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-orange-300 text-xs font-semibold flex items-center gap-1.5">
                  <SiGit className="text-sm text-orange-400" /> Git & GitHub Workflow
                </span>
              </div>
            </div>

            {/* Avatar & Profile Photo - HASSAN'S PICTURE HERE ONLY */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-800 p-1 shadow-2xl">
                  <img
                    src="/assets/images/logo.jpg"
                    alt="Hassan Ali"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Stats Divider Grid */}
          <div className="mt-10 pt-8 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            {stats.map(({ label, value }, idx) => (
              <div key={idx} className="bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {value}
                </div>
                <div className="text-zinc-400 text-xs sm:text-sm font-semibold mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;