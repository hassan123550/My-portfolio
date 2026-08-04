import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({
  icon: Icon,
  imgSrc,
  label,
  desc,
  colorClass = 'text-cyan-600',
  bgClass = 'bg-cyan-50 border-cyan-200'
}) => {
  return (
    <div className="flex items-center gap-3.5 py-3 px-2 transition-all duration-300 group hover:translate-x-1">
      
      {/* Icon or Image container */}
      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${bgClass} transition-transform group-hover:scale-110 duration-300`}>
        {Icon ? (
          <Icon className={`text-xl ${colorClass}`} />
        ) : (
          <img src={imgSrc} alt={label} className="w-6 h-6 object-contain" />
        )}
      </div>

      {/* Label & Description */}
      <div className="min-w-0 flex-1">
        <h4 className="text-white font-bold text-sm sm:text-base truncate group-hover:text-cyan-400 transition-colors">
          {label}
        </h4>
        <p className="text-zinc-400 text-xs truncate mt-0.5 font-medium">
          {desc}
        </p>
      </div>

    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.elementType,
  imgSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  colorClass: PropTypes.string,
  bgClass: PropTypes.string
};

export default SkillCard;
