import React from 'react';


const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 1
    }
];
const About = () => {
    return (
        <section id="about"
            className="section">

            <div className="container">

                <div className="bg-zinc-800/50 p-10 rounded-2xl md:p-12 max-w-6xl mx-auto mb-5">

                <h1 className='font-semibold text-2xl mb-2'>React Tailwind Portfolio Site</h1>

                    <p className="text-zinc-400 mb-4 md:mb-8 md:text-l md:max-w-[50ch]">

                        I'm a React Native and JavaScript developer focused on creating sleek, high-performance mobile apps.
                        With a strong eye for UI and a deep understanding of frontend logic,
                        I deliver seamless user experiences.
                        From clean code to creative design,
                        I turn your ideas into production-ready mobile solutions.
                        Now Start React js Journey
                    </p>


                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) =>
                                <div key={key}>

                                    <div className="flex items-center">

                                        <span className='text-2xl md:text-4xl font-semibold'>{number}</span>
                                        <span className='text-sky-400 font-semibold md:text-3xl'>+</span>

                                    </div>


                                  <p className="">{label}</p>

                                </div>

                            )
                        }

<img 
src="/images/hassan.png" 
alt="logo"
width={50}
height={50}
className="ml-auto md:w-[90px] md:h-[90px]"/>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;