import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaEnvelope, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      href: 'https://github.com/hassan123550',
      icon: FaGithub,
      label: 'GitHub',
      color: 'hover:text-cyan-400 border-zinc-700/80 hover:border-cyan-500/40'
    },
    {
      href: 'https://www.linkedin.com/in/hassan-randhawa',
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400 border-zinc-700/80 hover:border-blue-500/40'
    },
    {
      href: 'https://x.com/HassanA70781',
      icon: FaTwitter,
      label: 'Twitter',
      color: 'hover:text-sky-400 border-zinc-700/80 hover:border-sky-500/40'
    },
    {
      href: 'https://wa.me/923196210105?text=Hi%20Hassan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!',
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'hover:text-emerald-400 border-zinc-700/80 hover:border-emerald-500/40'
    }
  ];

  const handleSubmit = (e) => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 lg:py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: INFO & SOCIALS */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
                Get In Touch
              </h2>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight leading-tight">
                Let's Build Something Great Together
              </h3>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Have a React Native, Firebase, or full-stack web project in mind? Feel free to reach out directly via email, WhatsApp, or through the contact form.
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:hassan123550@gmail.com"
                className="flex items-center gap-4 py-2 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-base" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block font-medium">Direct Email</span>
                  <span className="text-zinc-200 text-sm font-semibold group-hover:text-cyan-300 transition-colors">
                    hassan123550@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/923196210105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-2 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-base" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block font-medium">Phone & WhatsApp</span>
                  <span className="text-zinc-200 text-sm font-semibold group-hover:text-emerald-300 transition-colors">
                    +92 319 6210105
                  </span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                Connect On Social Media
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label, color }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 ${color} flex items-center justify-center text-lg transition-all duration-300 hover:scale-105`}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="py-2">
              
              <h4 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h4>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2">
                  <HiCheck className="text-lg text-emerald-400" />
                  <span>Thank you! Your message has been sent successfully. Hassan will reply shortly.</span>
                </div>
              )}

              <form
                action="https://getform.io/f/bzynxxya"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Project Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="React Native & Firebase Mobile App Development"
                    className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Message Details
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project scope, timeline, and requirements..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-zinc-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
                >
                  <FaPaperPlane className="text-sm" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;