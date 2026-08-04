import React from 'react';
import { MdClose } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import cvFile from '../assets/cv/Hassan_Cv.pdf';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-3 sm:px-6 py-3 sm:py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-2 shrink-0">
          
          {/* HA Badge & Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-sm shrink-0">
              HA
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-lg font-bold text-white leading-tight truncate">Hassan Ali CV</h3>
              <p className="text-[10px] sm:text-xs text-cyan-400 font-semibold truncate">React Native & Web Developer</p>
            </div>
          </div>

          {/* Action Buttons: Download & Close */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href={cvFile}
              download="Hassan_Ali_CV.pdf"
              className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-700 flex items-center gap-1 sm:gap-1.5 transition-colors shrink-0"
            >
              <HiDownload className="text-sm text-cyan-400" />
              <span>Download Copy</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors border border-zinc-700 shrink-0"
              aria-label="Close CV modal"
            >
              <MdClose className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-zinc-950 relative overflow-hidden">
          <iframe
            src={`${cvFile}#toolbar=0`}
            title="Hassan Ali CV"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="px-3 sm:px-6 py-2.5 sm:py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0 text-[11px] sm:text-xs text-zinc-400 font-medium">
          <span className="truncate">Viewing Hassan_Cv.pdf</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 font-bold shrink-0 ml-2"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};

export default CVModal;
