// import React from 'react';
// import PropTypes from 'prop-types';

// const ratings = new Array(5);
// ratings.fill({
//     icon:'star',
//     style: {fontVariationSettings: '"Fill" 1'}
// });

// console.log(ratings);


// const ReviewCard = ({
//     content,
//     imgSrc,
//     name,
//     company
// }) => {
//   return (
//   <div className="relative rounded-2xl max-w-sm mx-auto p-4 bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">

// <div className="flex flex-wrap items-center gap-2">

// {ratings.map(({icon,style}, key) => 
// <span
//     key={key}
//     className="material-icons text-yellow-300 text-[18px]"
//     style={style}
//     >

// {icon}
// </span>
// )}

// </div>


// <p className="text-zinc-400 mb-8">
//     {content}
// </p>


// <div className="flex items-center gap-5 mt-auto">

// <figure className="img-box aspect-square rounded-lg">

// <img 
// src={imgSrc}
//  alt={name}
//  width={44}
//  height={44}
//  loading='lazy'
//   className="img-cover rounded-2xl" />

// </figure>

// <div>
//     <p className='font-semibold'>{name}</p>

//     <p className="text-xs text-zinc-400 tracking-wider">
//         {company}
//     </p>
// </div>


// </div>

//   </div>
//   );

// };


// ReviewCard.propTypes = {

//     content:  PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     compant: PropTypes.string.isRequired,

// }


// export default ReviewCard;









import React from 'react';
import PropTypes from 'prop-types';

// Create a fresh array for each star
const ratings = Array.from({ length: 5 }, () => ({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' },
}));

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="relative w-full max-w-sm p-4 md:p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">
      
      {/* Rating Stars */}
      <div className="flex flex-wrap items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-icons text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-zinc-400 mb-8">{content}</p>

      {/* User Info */}
      <div className="flex items-center gap-5 mt-auto">
        <figure className="w-11 h-11 rounded-lg overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>

        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired, // ✅ fix typo (was "compant")
};

export default ReviewCard;
