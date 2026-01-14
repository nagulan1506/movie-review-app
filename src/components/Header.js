import React from 'react';

const Header = ({ stats, onResetFilters }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16l13-8L7 4z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">MovieReview</h1>
              <p className="text-sm text-gray-600">Discover and rate amazing movies</p>
            </div>
          </div>

          {/* Stats and Actions */}
          <div className="flex items-center space-x-6">
            {/* Stats */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {stats.filteredCount}
                </div>
                <div className="text-gray-500">Movies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {stats.ratedMovies}
                </div>
                <div className="text-gray-500">Rated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {stats.averageRating.toFixed(1)}
                </div>
                <div className="text-gray-500">Avg Rating</div>
              </div>
            </div>

            {/* Reset Filters Button */}
            <button
              onClick={onResetFilters}
              className="
                px-4 py-2 bg-gray-100 text-gray-700 rounded-lg
                hover:bg-gray-200 transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-gray-300
                text-sm font-medium
              "
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden pb-4">
          <div className="flex justify-around text-center text-sm">
            <div>
              <div className="text-lg font-bold text-primary-600">
                {stats.filteredCount}
              </div>
              <div className="text-gray-500">Movies</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">
                {stats.ratedMovies}
              </div>
              <div className="text-gray-500">Rated</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-600">
                {stats.averageRating.toFixed(1)}
              </div>
              <div className="text-gray-500">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
