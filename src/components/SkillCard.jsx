// import React from 'react';
// import PropTypes from 'prop-types';

// const SkillCard = ({
//     imgSrc,
//     label,
//     desc,
//     classes
// }) => {
//   return (
//     <div className={"flex items-center gap-3 ring-2 ring-inset ring-gray-700 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group" + classes}>


//         <figure className="bg-gray-500 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900
//         transition-colors">
          
//          <img 
//          src={imgSrc}
//          width={32}
//          height={32}
//          alt={label}
//          />

//         </figure>

// <div className="">
//    <h3>{label}</h3>

//    <p className="text-zinc-400 text-sm">{desc}</p>
// </div>


//     </div>
//   );
// };


// SkillCard.propTypes= {
//     imgSrc:PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     desc:PropTypes.string.isRequired,
//     classes:PropTypes.string
// }
// export default SkillCard;









import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    // Adjusting padding: p-3 (mobile) increases to sm:p-4 (tablet/desktop)
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-gray-700 rounded-2xl p-3 sm:p-4 hover:bg-zinc-800 transition-colors group ${classes}`}>

        {/* The figure is fixed size (w-12 h-12) which is usually good for icons */}
        <figure className="bg-gray-500 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900
        transition-colors flex-shrink-0"> 
          
           {/* Added flex-shrink-0 to prevent the icon area from shrinking on small screens */}
           <img 
           src={imgSrc}
           width={32}
           height={32}
           alt={label}
           className="w-full h-full object-contain" // Ensuring the image scales within the figure
           />

        </figure>

        <div className="flex-grow min-w-0"> {/* Use min-w-0 to prevent text overflow issues */}
            <h3 className="truncate">{label}</h3> {/* Added truncate to prevent long labels from breaking the layout */}

            <p className="text-zinc-400 text-sm truncate">{desc}</p>
        </div>


    </div>
  );
};


SkillCard.propTypes= {
    imgSrc:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string
}
export default SkillCard;
