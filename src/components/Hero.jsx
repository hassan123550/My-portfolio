import React from 'react';
import { ButtonPrimary, ButtonOutline } from './ButtonPrimary';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container px-4 mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Avatar + Status */}
          <div className="flex items-center gap-3 mb-4">
            <figure className="w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="/images/avatar-1.jpg"
                width={100}
                height={100}
                alt="avatar"
                className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide mt-2">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Hero Heading */}
          <h2 className="text-sm mb-8 lg:mb-10">
            I have developed a responsive portfolio website using React.js and Tailwind CSS.
            It showcases my projects, skills, and contact information with a clean, modern UI.
            The site is fully optimized for all devices and uses reusable React components for better scalability.
            Tailwind CSS helped me build fast and responsive designs with minimal custom CSS.
          </h2>

          {/* Buttons Placeholder */}
          <div className="flex gap-4">

            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/cv.pdf"
              download={true}
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward" />

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-10 lg:mt-0 flex justify-center">
          <figure>
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Hero Banner"
              className="w-full max-w-md lg:max-w-full rounded-3xl h-80"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;