// import React from 'react';
// import { ButtonPrimary } from './ButtonPrimary';
// const Footer = () => {

//   const sitemap = [
//   {
//     label: 'Home',
//     href: '#home'
//   },
//   {
//     label: 'About',
//     href: '#about'
//   },
//   {
//     label: 'Work',
//     href: '#work'
//   },
//   {
//     label: 'Reviews',
//     href: '#reviews'
//   },
//   {
//     label: 'Contact me',
//     href: '#contact'
//   }
// ];

// const socials = [
//   {
//     label: 'GitHub',
//     href: 'https://github.com/hassan123550'
//   },
//   {
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/hassan-randhawa'
//   },
//   {
//     label: 'Twitter X',
//     href: 'https://x.com/HassanA70781'
//   },
//   {
//     label: 'WhatsApp',
//     href: 'https://wa.me/923296704691?text=Hi%20Hassan%2C%20I%20am%20interested%20in%20working%20with%20you!'
//   },
// ];
//   return (
//   <footer className="section">

// <div className="container">

// <div className="lg:grid lg:grid-cols-2">


// <h2 className="headline-2">

// Let’s collaborate and create something amazing today!

// </h2>

// <ButtonPrimary 
// href="mailto:hasu77212.osman@gmail.com"
// label="Start project"
//  icon={<span className="material-icons">chevron_right</span>}/>



// <div className="">

// <div>

// <p className="">Sitemap</p>

// <ul>
//   {sitemap.map(({label,href}, key) => 
//   <li  
//   key={key}>

// <a 
// href={href}
// className="">

//   {label}
// </a>


//   </li>
//   )}
// </ul>

// </div>

// <div>

// <p className="">Socials</p>

// <ul>
//   {socials.map(({label,href}, key) => 
//   <li  
//   key={key}>

// <a 
// href={href}
// target="_blank"
// className="">

//   {label}
// </a>


//   </li>
//   )}
// </ul>

// </div>


// </div>
// </div>


// <div className="">

//   <a 
//   href=""
//    className="">


// <img 
// src="/images/logo.png"
// width={100}
// height={100}
// alt="Logo"/>
//    </a>


// <p className="">
//   &copy;2023 <span className="">CodeWith@Hassan</span>
// </p>


// </div>


// </div>
//   </footer>
//   );
// };

// export default Footer;








import React from 'react';
import { ButtonPrimary } from './ButtonPrimary';

const Footer = () => {
  const sitemap = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact me', href: '#contact' }
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/hassan123550' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hassan-randhawa' },
    { label: 'Twitter X', href: 'https://x.com/HassanA70781' },
    { label: 'WhatsApp', href: 'https://wa.me/923196210105?text=Hi%20Hassan%2C%20I%20am%20interested%20in%20working%20with%20you!' },
  ];

  return (
    <footer className="bg-zinc-900 text-white py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Top Section */}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            Let’s collaborate and create something amazing today!
          </h2>

          <ButtonPrimary 
            href="mailto:hasu77212.osman@gmail.com"
            label="Start project"
            icon={<span className="material-icons">chevron_right</span>}
          />
        </div>

        {/* Sitemap + Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
        <p className="text-lg font-semibold mb-4 bg-white text-black rounded-md w-fit px-2 py-2 sm:text-xl sm:px-4 sm:py-2">
  Sitemap
</p>

            <ul className="space-y-2">
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} className="hover:text-sky-400 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
   <p className="text-lg font-semibold mb-4 bg-white text-black rounded-md w-fit px-2 py-2 sm:text-xl sm:px-4 sm:py-2">Socials</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-1 lg:col-span-2 border-t border-zinc-700 mt-10 pt-8 text-center">
          <a href="#" className="inline-block mb-4">
            <img src="/images/logo.png" width={100} height={100} alt="Logo" className="mx-auto" />
          </a>
          <p className="text-sm text-zinc-400">
            &copy; 2023 <span className="font-semibold text-white">CodeWith@Hassan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
