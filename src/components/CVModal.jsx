import React from 'react';
import { MdClose } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl h-[85vh] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-extrabold text-xs flex items-center justify-center shadow-sm">
              HA
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">CV</h3>
              <p className="text-xs text-cyan-400 font-semibold">React Native, Firebase & REST API Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/assets/cv/Hassan_Cv.pdf"
              download="Hassan_Ali_CV.pdf"
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-700 flex items-center gap-1.5 transition-colors"
            >
              <HiDownload className="text-sm text-cyan-400" />
              <span>Download Copy</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors border border-zinc-700"
              aria-label="Close CV modal"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-zinc-950 relative overflow-hidden">
          <iframe
            src="/assets/cv/Hassan_Cv.pdf#toolbar=0"
            title="Hassan Ali CV"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0 text-xs text-zinc-400 font-medium">
          <span>Viewing Hassan_Cv.pdf</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 font-bold"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};

export default CVModal;
