import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ content, name, company }) => {
  const getInitial = (n) => (n ? n.charAt(0).toUpperCase() : 'U');

  return (
    <div className="flex flex-col justify-between py-4 px-2 border-l-2 border-zinc-800 hover:border-cyan-400 pl-5 transition-all duration-300 group">
      
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-5">
          "{content}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-bold text-sm flex items-center justify-center shrink-0">
          {getInitial(name)}
        </div>

        <div>
          <h4 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors">
            {name}
          </h4>
          <p className="text-zinc-400 text-xs font-medium">
            {company}
          </p>
        </div>
      </div>

    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
