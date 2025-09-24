// import React from 'react';
// import SkillCard from './SkillCard';



// const Skill = () => {
//     const skillItem = [
//         {
//             imgSrc: '/images/figma.svg',
//             label: 'Figma',
//             desc: 'Design tool'
//         },
//         {
//             imgSrc: '/images/css3.svg',
//             label: 'CSS',
//             desc: 'User Interface'
//         },
//         {
//             imgSrc: '/images/javascript.svg',
//             label: 'JavaScript',
//             desc: 'Interaction'
//         },
//         {
//             imgSrc: '/images/nodejs.svg',
//             label: 'NodeJS',
//             desc: 'Web Server'
//         },
//         {
//             imgSrc: '/images/expressjs.svg',
//             label: 'ExpressJS',
//             desc: 'Node Framework'
//         },
//         {
//             imgSrc: '/images/mongodb.svg',
//             label: 'MongoDB',
//             desc: 'Database'
//         },
//         {
//             imgSrc: '/images/react.svg',
//             label: 'React',
//             desc: 'Framework'
//         },
//         {
//             imgSrc: '/images/tailwindcss.svg',
//             label: 'TailwindCSS',
//             desc: 'User Interface'
//         },
//     ];

//     return (
//         <section className="section">
//             <div className="container">

//                 <h2 className="headline-2 mb-2">
//                     I Use Professional Tools
//                 </h2>

//                 <p className="text-zinc-400 mb-8 max-w-[50ch] ml-10">
//                     I'm Hassan, a skilled developer crafting exceptional websites and mobile apps using modern tools and technologies.
//                     From design to deployment, I deliver high-performance digital experiences that stand out.
//                 </p>

//                 <div className="grid gap-4 ml-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] p-2">
//                     {
//                         skillItem.map(({ imgSrc, label, desc }, key) => {
//                             return (
//                                 <SkillCard
//                                     key={key}
//                                     imgSrc={imgSrc}
//                                     label={label}
//                                     desc={desc}
//                                 />
//                             );
//                         })

//                     }
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skill;











import React from 'react';
import SkillCard from './SkillCard';

const Skill = () => {
  const skillItem = [
    { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
    { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
    { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
    { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
    { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
    { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
    { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
    { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
  ];

  return (
    // **Responsiveness is handled here** with fluid padding and width
    <section className="section py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        
        {/* Alignment changes based on screen size */}
        <h2 className="headline-2 mb-4 text-center sm:text-left">
          I Use Professional Tools
        </h2>

        {/* Max width and alignment changes based on screen size */}
        <p className="text-zinc-400 mb-10 max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
          I'm Hassan, a skilled developer crafting exceptional websites and mobile apps using modern tools and technologies.
          From design to deployment, I deliver high-performance digital experiences that stand out.
        </p>

        {/* **The grid is highly responsive:** 1, 2, 3, or 4 columns based on the viewport size */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
