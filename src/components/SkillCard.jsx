import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={"flex items-center gap-3 ring-2 ring-inset ring-gray-700 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group" + classes}>


        <figure className="bg-gray-500 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900
        transition-colors">
          
         <img 
         src={imgSrc}
         width={32}
         height={32}
         alt={label}
         />

        </figure>

<div className="">
   <h3>{label}</h3>

   <p className="text-zinc-400 text-sm">{desc}</p>
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






















// import React from 'react';
// import PropTypes from 'prop-types';

// const SkillCard = ({ imgSrc, label, desc, classes }) => {
//   return (
//     <div
//       className={
//         "flex flex-col sm:flex-row sm:items-center gap-3 ring-2 ring-inset ring-gray-700 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group text-center sm:text-left" +
//         (classes ? " " + classes : "")
//       }
//     >
    
//       <figure
//         className="bg-gray-500 rounded-lg overflow-hidden w-16 h-16 sm:w-12 sm:h-12 p-3 flex items-center justify-center group-hover:bg-zinc-900 transition-colors mx-auto sm:mx-0"
//       >
//         <img
//           src={imgSrc}
//           width={40}
//           height={40}
//           alt={label}
//           className="object-contain"
//         />
//       </figure>

      
//       <div>
//         <h3 className="font-medium text-base sm:text-lg">{label}</h3>
//         <p className="text-zinc-400 text-sm">{desc}</p>
//       </div>
//     </div>
//   );
// };

// SkillCard.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
