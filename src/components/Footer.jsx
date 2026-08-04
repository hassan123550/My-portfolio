import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const sitemap = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/hassan123550' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hassan-randhawa' },
    { label: 'WhatsApp', href: 'https://wa.me/923196210105?text=Hi%20Hassan%2C%20I%20saw%20your%20portfolio!' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-extrabold text-sm flex items-center justify-center shadow-lg shadow-cyan-500/20">
                HA
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Hassan Ali
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              React Native, Firebase & Full-Stack Web Developer. Designing and building high-impact mobile applications and web platforms.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hassan123550@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-semibold hover:border-cyan-500/40 transition-colors"
              >
                <HiMail className="text-base" />
                <span>hassan123550@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {sitemap.map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href} className="text-zinc-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Connect With Me
            </h4>
            <ul className="space-y-2 text-sm">
              {socials.map(({ label, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    {label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Hassan Ali. All rights reserved. Built with React.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 flex items-center gap-2 transition-all hover:border-zinc-700"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
