import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(() => {
    // Check if user has already seen preloader in this browser session
    const hasSeen = sessionStorage.getItem('hasSeenPreloader');
    return !hasSeen;
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) return;

    // Save flag so preloader does not show again on refresh
    sessionStorage.setItem('hasSeenPreloader', 'true');

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2700);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 transition-opacity duration-500 ${
      fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Glow aura */}
      <div className="absolute w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative flex flex-col items-center gap-7 z-10">
        
        {/* Larger Dotted Spinner Frame surrounding Prominent Profile Photo */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
          
          {/* Outer Dotted Spinner Ring */}
          <div className="absolute inset-0 rounded-full border-3 border-dashed border-cyan-400 animate-[spin_6s_linear_infinite]"></div>
          
          {/* Secondary Pulse Dotted Accent Ring */}
          <div className="absolute inset-2.5 rounded-full border-2 border-dotted border-emerald-400/80 animate-[spin_4s_linear_infinite_reverse]"></div>

          {/* Prominent Profile Picture */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-800 shadow-2xl p-0.5 group">
            <img
              src="/assets/images/logo.jpg"
              alt="Hassan Ali Profile"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>

        {/* Text Details - Larger & Prominent Title */}
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hassan Ali
          </h2>
          <p className="text-sm sm:text-base text-cyan-400 font-bold tracking-wider uppercase mt-1.5">
            React Native & REST API Developer
          </p>
          
          {/* Loading Dots animation */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
