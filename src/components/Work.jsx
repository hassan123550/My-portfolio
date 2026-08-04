import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData';

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryFilter === filter);

  return (
    <section id="work" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
              Featured Projects & UI/UX
            </h2>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
              Selected Projects & App Designs
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Showcase of primary React Native CLI, Firebase & REST API applications with video walkthroughs, alongside modern UI/UX mobile and web application designs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All Works ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                filter === 'mobile'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              React Native ({projectsData.filter(p => p.categoryFilter === 'mobile').length})
            </button>
            <button
              onClick={() => setFilter('uiux')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                filter === 'uiux'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              UI/UX App Designs ({projectsData.filter(p => p.categoryFilter === 'uiux').length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Project Case Study Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;
