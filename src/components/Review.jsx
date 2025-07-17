import React from 'react';
import ReviewCard from './ReviewCard';



const Review = () => {
    const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Usman',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Hasnain',
    imgSrc: '/images/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Irshad',
    imgSrc: '/images/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations and communication.',
    name: 'Tayyab',
    imgSrc: '/images/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ahmad',
    imgSrc: '/images/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent High-quality code,responsive design,and exceptional problem-solving skills.',
    name: 'Faizan',
    imgSrc: '/images/people-6.jpg',
    company: 'Skyline Digital'
  }
];

  return (
   <section 
   id="reviews"
   className="section overflow-hidden">

<div className="container">

<h2 className="headline-2 mb-8">

    What our customers say
</h2>

<div className="grid gap-x-5 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] m-10">
  
  {reviews.map(({content,name,imgSrc,company}, key) => 
 <ReviewCard 
 key={key}
 name={name}
 imgSrc={imgSrc}
 company={company}
 content={content}/>
)}

</div>

</div>

   </section>
  );
};

export default Review;