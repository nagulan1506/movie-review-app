import React from 'react';
import StarRating from './StarRating';

const MovieCard = ({ movie, onMovieClick, onRate }) => {
  const handleCardClick = () => {
    onMovieClick(movie);
  };

  const handleRatingClick = (e) => {
    e.stopPropagation(); // Prevent card click when rating
  };

  const formatGenres = (genres) => {
    return genres.slice(0, 2).join(', ') + (genres.length > 2 ? '...' : '');
  };

  return (
    <div
      className="
        bg-white rounded-xl shadow-card hover:shadow-card-hover
        transition-all duration-300 ease-in-out
        cursor-pointer group overflow-hidden
        transform hover:scale-105
      "
      onClick={handleCardClick}
    >
      {/* Movie Poster */}
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="
            w-full h-64 sm:h-72 md:h-80 object-cover
            transition-transform duration-300
            group-hover:scale-110
          "
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image';
          }}
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-75 rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white text-sm font-semibold">{movie.rating}</span>
          </div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3 bg-primary-600 text-white rounded-full px-3 py-1">
          <span className="text-sm font-medium">{movie.year}</span>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-4">
        {/* Title */}
        <h3 className="
          text-lg font-bold text-gray-900 mb-2
          line-clamp-2 group-hover:text-primary-600
          transition-colors duration-200
        ">
          {movie.title}
        </h3>

        {/* Genres */}
        <p className="text-sm text-gray-600 mb-3">
          {formatGenres(movie.genre)}
        </p>

        {/* Director */}
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-medium">Director:</span> {movie.director}
        </p>

        {/* Runtime */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {movie.runtime}
        </div>

        {/* User Rating Section */}
        <div className="border-t pt-3" onClick={handleRatingClick}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Your Rating:</span>
            <StarRating
              rating={movie.userRating || 0}
              onRate={(rating) => onRate(movie.id, rating)}
              size="small"
              showValue={false}
            />
          </div>
          {movie.userRating && (
            <p className="text-xs text-gray-500 mt-1">
              You rated: {movie.userRating}/5 stars
            </p>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="
        absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      " />
    </div>
  );
};

export default MovieCard;
