import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaPlay, FaImages, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { title, subtitle, category, tags, posterImg, videoSrc, images, projectLink } = project;

  return (
    <div 
      className="group relative rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col overflow-hidden shadow-md backdrop-blur-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* MEDIA PREVIEW FRAME */}
      <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden shrink-0">
        
        {/* Poster Image or Video Preview */}
        {videoSrc && isHovered ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain mx-auto my-auto transition-scale duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={posterImg}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md text-cyan-300 border border-zinc-800 text-xs font-bold shadow-md">
            {category}
          </span>
        </div>

        {/* Video / Image Count Indicator */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          {videoSrc && (
            <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-zinc-950 text-[11px] font-bold flex items-center gap-1 shadow-md">
              <FaPlay className="text-[9px]" /> Video Demo
            </span>
          )}
          {images && images.length > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md text-zinc-300 border border-zinc-700 text-[11px] font-bold flex items-center gap-1 shadow-sm">
              <FaImages className="text-xs text-cyan-400" /> {images.length}
            </span>
          )}
        </div>

        {/* Center Hover Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-950/60 backdrop-blur-xs">
          <button
            onClick={() => onSelectProject(project)}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:from-cyan-400 hover:to-emerald-400"
          >
            <span>Explore Case Study</span>
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>

      </div>

      {/* CONTENT BODY */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 
            onClick={() => onSelectProject(project)}
            className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-1"
          >
            {title}
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800 text-[11px] font-semibold"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-1 rounded-lg bg-zinc-950 text-zinc-500 text-[11px] font-semibold">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
          <button
            onClick={() => onSelectProject(project)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
          >
            <span>View Demo & Details</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition-colors"
              title="View Source Code on GitHub"
            >
              <FaGithub className="text-base" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onSelectProject: PropTypes.func.isRequired
};

export default ProjectCard;