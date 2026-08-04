import React, { useState } from 'react';
import { MdClose, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { FaGithub, FaVideo, FaImages } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState(project?.videoSrc ? 'video' : 'screenshots');
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];

  const handleNextImg = () => {
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImg = () => {
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-bold">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors border border-zinc-700"
            aria-label="Close modal"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          
          {/* Media Switcher Tabs */}
          <div className="flex gap-2 border-b border-zinc-800 pb-3">
            {project.videoSrc && (
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all ${
                  activeTab === 'video'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                }`}
              >
                <FaVideo /> Video Walkthrough
              </button>
            )}

            {images.length > 0 && (
              <button
                onClick={() => setActiveTab('screenshots')}
                className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all ${
                  activeTab === 'screenshots'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                }`}
              >
                <FaImages /> Screenshot Gallery ({images.length})
              </button>
            )}
          </div>

          {/* Video Player Display */}
          {activeTab === 'video' && project.videoSrc && (
            <div className="relative aspect-video max-h-[460px] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center p-2 shadow-md">
              <video
                src={project.videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain mx-auto my-auto block rounded-xl"
              />
            </div>
          )}

          {/* Screenshot Slider Display */}
          {activeTab === 'screenshots' && images.length > 0 && (
            <div className="space-y-4">
              <div className="relative aspect-video max-h-[460px] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center group shadow-md">
                <img
                  src={images[activeImgIndex]}
                  alt={`${project.title} screenshot ${activeImgIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImg}
                      className="absolute left-3 w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-md border border-zinc-700 transition-transform hover:scale-105"
                    >
                      <MdNavigateBefore className="text-3xl" />
                    </button>
                    <button
                      onClick={handleNextImg}
                      className="absolute right-3 w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-md border border-zinc-700 transition-transform hover:scale-105"
                    >
                      <MdNavigateNext className="text-3xl" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-zinc-900/90 text-white text-xs font-mono border border-zinc-700">
                  {activeImgIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeImgIndex === idx
                          ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description & Details */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Project Description
            </h4>
            <p className="text-zinc-200 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                    <HiCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0">
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 flex items-center gap-2 transition-all"
            >
              <FaGithub className="text-lg" />
              <span>Source Code on GitHub</span>
            </a>
          ) : (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-semibold">
              <span>Figma UI/UX Mobile App Design Showcase</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-emerald-400"
          >
            Close Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
