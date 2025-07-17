import React from 'react';
import ProjectCard from './ProjectCard';


const Work = () => {

    const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'E-Commerce App',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/hassan123550/E-Commerce-App'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Food App',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/hassan123550/Food-App/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'React js',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/hassan123550/express-auth'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state App',
    tags: ['App-Design', 'Development'],
    projectLink: 'https://github.com/hassan123550/Codealpha_tasks'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Login-Signup-from-Formik-Yup',
    tags: ['#Login/Signup', 'Development'],
    projectLink: 'https://github.com/hassan123550/Login-Signup-from-Formik-Yup'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Card Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/hassan123550/Card-React-js-Props-TailwindCss'
  },
];
  return (
   <section 
   id="work"
   className="section">
   <div className="container">
    
    <h2 className="headline-2">
        My portfolio highlights
    </h2>

<div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] m-10">
    
{works.map(({imgSrc,title,tags,projectLink }, key) => 
     <ProjectCard 
     key={key}
     imgSrc={imgSrc}
     title={title}
     tags={tags}
     projectLink={projectLink}
     />
)}

</div>

   </div>
   </section>
  );
};

export default Work;