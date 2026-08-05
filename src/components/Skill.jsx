import React, { useState } from 'react';
import SkillCard from './SkillCard';
import { 
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiFirebase, SiGit, SiGithub, SiFigma, 
  SiPostman, SiRedux, SiSocketdotio 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    // Mobile Development & Firebase
    { icon: TbBrandReactNative, label: 'React Native CLI', desc: 'Native Community Modules', category: 'mobile', colorClass: 'text-cyan-400', bgClass: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: SiFirebase, label: 'Firebase Auth & DB', desc: 'Authentication & Firestore', category: 'mobile', colorClass: 'text-amber-400', bgClass: 'bg-amber-500/10 border-amber-500/20' },
    { icon: SiRedux, label: 'Redux Toolkit', desc: 'Global State Management', category: 'mobile', colorClass: 'text-purple-400', bgClass: 'bg-purple-500/10 border-purple-500/20' },
    { icon: SiReact, label: 'Context API', desc: 'React State Management', category: 'mobile', colorClass: 'text-cyan-400', bgClass: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: SiJavascript, label: 'JavaScript ES6+', desc: 'Mobile & Web Application Logic', category: 'mobile', colorClass: 'text-yellow-400', bgClass: 'bg-yellow-500/10 border-yellow-500/20' },

    // Frontend Development
    { icon: SiReact, label: 'React.js', desc: 'Frontend Web Library', category: 'frontend', colorClass: 'text-cyan-400', bgClass: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: SiTailwindcss, label: 'Tailwind CSS', desc: 'Utility-First Styling', category: 'frontend', colorClass: 'text-teal-400', bgClass: 'bg-teal-500/10 border-teal-500/20' },

    // Backend & API Integration
    { icon: SiNodedotjs, label: 'REST API Integration', desc: 'Backend Endpoints & Sockets', category: 'backend', colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10 border-emerald-500/20' },
    { icon: SiFirebase, label: 'Firebase Backend & DB', desc: 'Authentication & Cloud Firestore', category: 'backend', colorClass: 'text-amber-400', bgClass: 'bg-amber-500/10 border-amber-500/20' },
    { icon: SiExpress, label: 'Express.js', desc: 'REST API Framework', category: 'backend', colorClass: 'text-zinc-300', bgClass: 'bg-zinc-800 border-zinc-700' },
    { icon: SiMongodb, label: 'MongoDB', desc: 'Database Systems', category: 'backend', colorClass: 'text-green-400', bgClass: 'bg-green-500/10 border-green-500/20' },
    { icon: SiSocketdotio, label: 'Socket.io', desc: 'Real-Time WebSockets', category: 'backend', colorClass: 'text-indigo-400', bgClass: 'bg-indigo-500/10 border-indigo-500/20' },

    // Tools & Design
    { icon: SiGit, label: 'Git & Version Control', desc: 'Branching, Merging & Local VCS', category: 'tools', colorClass: 'text-orange-400', bgClass: 'bg-orange-500/10 border-orange-500/20' },
    { icon: SiGithub, label: 'GitHub & Cloud Repos', desc: 'Code Hosting, PRs & Collaboration', category: 'tools', colorClass: 'text-zinc-200', bgClass: 'bg-zinc-800 border-zinc-700' },
    { icon: SiFigma, label: 'Figma', desc: 'UI/UX Prototyping', category: 'tools', colorClass: 'text-pink-400', bgClass: 'bg-pink-500/10 border-pink-500/20' },
    { icon: SiPostman, label: 'Postman', desc: 'API Testing', category: 'tools', colorClass: 'text-orange-400', bgClass: 'bg-orange-500/10 border-orange-500/20' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'mobile', label: 'React Native & Firebase' },
    { id: 'frontend', label: 'Frontend Web' },
    { id: 'backend', label: 'REST API & Backend' },
    { id: 'tools', label: 'Tools & Workflow' }
  ];

  return (
    <section id="skills" className="py-10 sm:py-16 md:py-20 lg:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
              Technical Expertise
            </h2>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
              Technologies & Tools I Use
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Specialized in React Native CLI, Firebase Cloud Services, REST API architecture, and modern UI engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeCategory === id
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;
