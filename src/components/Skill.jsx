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
 
        <section className="section py-12 px-4 sm:px-6 lg:px-12">
            
            
            <div className="container mx-auto"> 
                

{/* <h2
  className="mb-4 text-center sm:text-left w-full 
             text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
             font-extrabold tracking-tight leading-snug max-w-2xl mx-auto sm:mx-0"
>
  I Use Professional Tools
</h2>

<p
  className="text-zinc-400 mb-10 text-center sm:text-left 
             max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg leading-relaxed"
>
  I'm Hassan, a skilled developer crafting exceptional websites and mobile apps using modern tools and technologies.
  From design to deployment, I deliver high-performance digital experiences that stand out.
</p> */}








                <h2
  className="mb-4 text-left w-full 
             text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
             font-extrabold tracking-tight leading-snug 
             max-w-3xl pl-2 sm:pl-4 md:pl-8"
>
  I Use Professional Tools
</h2>

<p
  className="text-zinc-400 mb-10 text-left 
             max-w-3xl text-base sm:text-lg leading-relaxed 
             pl-2 sm:pl-4 md:pl-8"
>
  I'm Hassan, a skilled developer crafting exceptional websites and mobile apps using modern tools and technologies.
  From design to deployment, I deliver high-performance digital experiences that stand out.
</p>


     
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => {
                            return (
                                <SkillCard
                                    key={key}
                                    imgSrc={imgSrc}
                                    label={label}
                                    desc={desc}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Skill;
