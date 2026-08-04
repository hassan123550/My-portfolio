import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ content, name, company }) => {
  const getInitial = (n) => (n ? n.charAt(0).toUpperCase() : 'U');

  return (
    <div className="flex flex-col justify-between p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 group shadow-md backdrop-blur-xl">
      
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-zinc-300 text-sm leading-relaxed italic mb-6">
          "{content}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 text-zinc-950 font-bold text-base flex items-center justify-center shadow-lg shadow-cyan-500/20">
          {getInitial(name)}
        </div>

        <div>
          <h4 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors">
            {name}
          </h4>
          <p className="text-zinc-400 text-xs font-semibold">
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
