import React from 'react';
import StarRating from './StarRating';

const MovieModal = ({ movie, isOpen, onClose, onRate }) => {
  if (!isOpen || !movie) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRatingClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-bounce-in">
        {/* Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900 truncate pr-4">
            {movie.title}
          </h2>
          <button
            onClick={onClose}
            className="
              p-2 rounded-full hover:bg-gray-100
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-300
            "
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Movie Poster */}
            <div className="md:col-span-1">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  className="w-full rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600/374151/9CA3AF?text=No+Image';
                  }}
                />

                {/* Rating Badge on Poster */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-75 rounded-full px-3 py-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-semibold">{movie.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Information */}
            <div className="md:col-span-2 space-y-6">
              {/* Basic Info */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {movie.year}
                  </span>
                  <span className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {movie.runtime}
                  </span>
                  <span className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                    {movie.language}
                  </span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genre.map((genre) => (
                    <span
                      key={genre}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plot */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Plot</h3>
                <p className="text-gray-700 leading-relaxed">{movie.plot}</p>
              </div>

              {/* Director */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Director</h3>
                <p className="text-gray-700">{movie.director}</p>
              </div>

              {/* Cast */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cast</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {movie.cast.map((actor, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-600 font-semibold text-sm">
                          {actor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-800 font-medium">{actor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Country</h4>
                  <p className="text-gray-600">{movie.country}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">IMDb Rating</h4>
                  <div className="flex items-center">
                    <StarRating rating={movie.rating / 2} maxRating={5} readOnly size="small" />
                    <span className="ml-2 text-gray-600">({movie.rating}/10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Rating Section */}
          <div className="mt-8 pt-6 border-t border-gray-200" onClick={handleRatingClick}>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rate This Movie</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-2">
                    {movie.userRating
                      ? `You rated this movie ${movie.userRating} out of 5 stars`
                      : 'Click to rate this movie'
                    }
                  </p>
                  <StarRating
                    rating={movie.userRating || 0}
                    onRate={(rating) => onRate(movie.id, rating)}
                    size="large"
                    showValue={false}
                  />
                </div>
                {movie.userRating && (
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {movie.userRating}
                    </div>
                    <div className="text-sm text-gray-500">Your Rating</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
