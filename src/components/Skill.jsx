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
                
            
                <h2 className="mb-4 text-center sm:text-center block w-full text-3xl md:text-4xl font-bold">
        I Use Professional Tools
    </h2>

                <p className="text-zinc-400 mb-10 max-w-2xl text-center sm:text-center mx-auto sm:mx-auto">
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
