import React, { useState } from 'react';

const StarRating = ({
  rating = 0,
  onRate,
  maxRating = 5,
  size = 'medium',
  readOnly = false,
  showValue = true
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const handleClick = (ratingValue) => {
    if (!readOnly && onRate) {
      onRate(ratingValue);
    }
  };

  const handleMouseEnter = (ratingValue) => {
    if (!readOnly) {
      setHoverRating(ratingValue);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const getStarColor = (starIndex) => {
    const currentRating = hoverRating || rating;

    if (currentRating >= starIndex) {
      return readOnly ? 'text-yellow-400' : 'text-yellow-500 hover:text-yellow-600';
    }
    return 'text-gray-300';
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const starIndex = index + 1;
          return (
            <button
              key={starIndex}
              type="button"
              className={`
                ${sizeClasses[size]}
                ${getStarColor(starIndex)}
                ${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
                transition-all duration-150 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded
              `}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              disabled={readOnly}
              aria-label={`Rate ${starIndex} out of ${maxRating} stars`}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          );
        })}
      </div>

      {showValue && rating > 0 && (
        <span className={`
          ${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'}
          text-gray-600 font-medium ml-2
        `}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
