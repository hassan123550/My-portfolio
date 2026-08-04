// import React from 'react';

// const Navbar = () => {
//   return (
//     <div>

//         <nav className='bg-emerald-950 flex py-5 px-10 justify-between'>
//     <h2 className='text-4xl'>Hassan Ali</h2>
//     <div className='flex gap-8 mt-3'>
//       <h4 className='text-x'>About</h4>
//       <h4 className='text-x'>Contact</h4>
//       <h4 className='text-x'>Services</h4>
//       <h4 className='text-x'>Your Account</h4>
//     </div>

//    </nav>

//     </div>
//   );
// };

// export default Navbar;






import { useState } from 'react';

const Navbar = ({ navOpen, closeNav }) => {
  const [activeLink, setActiveLink] = useState('#home');

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Work', link: '#work' },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contact', link: '#contact' }
  ];

  const handleClick = (link) => {
    setActiveLink(link);
    if (closeNav) closeNav();
  };

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      <div className="flex flex-col md:flex-row items-center gap-1 bg-zinc-900/90 backdrop-blur-xl p-1.5 rounded-2xl border border-zinc-800 shadow-lg">
        {navItems.map(({ label, link }) => {
          const isActive = activeLink === link;
          return (
            <a
              key={link}
              href={link}
              onClick={() => handleClick(link)}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/30 shadow-sm shadow-cyan-500/10' 
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent'
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;