import React from 'react';
import SkillCard from './SkillCard';



const Skill = () => {
    const skillItem = [
        {
            imgSrc: '/images/figma.svg',
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: '/images/css3.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/images/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: '/images/nodejs.svg',
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: '/images/expressjs.svg',
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: '/images/mongodb.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: '/images/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: '/images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
    ];

    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 mb-2">
                    I Use Professional Tools
                </h2>

                <p className="text-zinc-400 mb-8 max-w-[50ch] ml-10">
                    I'm Hassan, a skilled developer crafting exceptional websites and mobile apps using modern tools and technologies.
                    From design to deployment, I deliver high-performance digital experiences that stand out.
                </p>

                <div className="grid gap-4 ml-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] p-2">
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