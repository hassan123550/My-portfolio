import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
  const reviews = [
    {
      content: 'Hassan developed our React Native mobile shopping app with clean architecture, Firebase authentication, and seamless REST API integration. Highly recommend!',
      name: 'Usman Chaudhry',
      company: 'Tech Mart Client'
    },
    {
      content: 'Outstanding work on our IoT security monitoring application. Real-time alert notifications and device controls work flawlessly.',
      name: 'Hasnain Malik',
      company: 'Smart Automation Lead'
    },
    {
      content: 'Extremely talented React Native & Firebase developer! The Flash Chat app interface and real-time database sync were implemented beyond expectations.',
      name: 'Irshad Ahmad',
      company: 'CodeCraft Studio'
    },
    {
      content: 'Delivered an intuitive IoT web dashboard with clean data charts and responsive layouts. Great communication throughout.',
      name: 'Tayyab Raza',
      company: 'BrightWeb Solutions'
    },
    {
      content: 'Professional, efficient, and detail-oriented. Hassan turns complex mobile app UI concepts into production-ready software.',
      name: 'Ahmad Farooq',
      company: 'TechMosaic Systems'
    },
    {
      content: 'High quality React.js, React Native and Firebase integration with exceptional problem-solving skills. Truly a top-tier developer!',
      name: 'Faizan Ali',
      company: 'Skyline Digital'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
            Client Testimonials
          </h2>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
            What Clients & Collaborators Say
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-medium">
            Feedback from team leads, clients, and partners on delivered projects, Firebase solutions, and mobile app implementations.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, key) => (
            <ReviewCard key={key} {...rev} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Review;