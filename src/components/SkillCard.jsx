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
    <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group shadow-md backdrop-blur-xl">
      
      {/* Icon or Image container */}
      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${bgClass} transition-transform group-hover:scale-110 duration-300`}>
        {Icon ? (
          <Icon className={`text-2xl ${colorClass}`} />
        ) : (
          <img src={imgSrc} alt={label} className="w-7 h-7 object-contain" />
        )}
      </div>

      {/* Label & Description */}
      <div className="min-w-0 flex-1">
        <h4 className="text-white font-bold text-base truncate group-hover:text-cyan-400 transition-colors">
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
