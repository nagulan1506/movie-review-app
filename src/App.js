import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import useMovies from './hooks/useMovies';

function App() {
  const {
    movies,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    selectedYear,
    setSelectedYear,
    selectedMovie,
    setSelectedMovie,
    updateMovieRating,
    resetFilters,
    availableGenres,
    availableYears,
    stats
  } = useMovies();

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleRateMovie = (movieId, rating) => {
    updateMovieRating(movieId, rating);
  };

  const genreIcon = (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );

  const yearIcon = (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header stats={stats} onResetFilters={resetFilters} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
            {/* Search Bar */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Movies
              </label>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="Search by title..."
              />
            </div>

            {/* Genre Filter */}
            <div className="lg:w-48">
              <FilterDropdown
                label="Genre"
                value={selectedGenre}
                onChange={setSelectedGenre}
                options={availableGenres}
                icon={genreIcon}
              />
            </div>

            {/* Year Filter */}
            <div className="lg:w-48">
              <FilterDropdown
                label="Year"
                value={selectedYear}
                onChange={setSelectedYear}
                options={availableYears}
                icon={yearIcon}
              />
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedGenre !== 'All Genres' || selectedYear !== 'All Years') && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>

                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 text-primary-600 hover:text-primary-800"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedGenre !== 'All Genres' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Genre: {selectedGenre}
                    <button
                      onClick={() => setSelectedGenre('All Genres')}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedYear !== 'All Years' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Year: {selectedYear}
                    <button
                      onClick={() => setSelectedYear('All Years')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {movies.length === 0 ? 'No movies found' :
             movies.length === 1 ? '1 movie found' :
             `${movies.length} movies found`}
          </h2>

          {movies.length > 0 && (
            <div className="text-sm text-gray-600">
              Showing {movies.length} of {stats.totalMovies} movies
            </div>
          )}
        </div>

        {/* Movie Grid */}
        {movies.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No movies found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters to find more movies.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="animate-fade-in">
                <MovieCard
                  movie={movie}
                  onMovieClick={handleMovieClick}
                  onRate={handleRateMovie}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Movie Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={!!selectedMovie}
        onClose={handleCloseModal}
        onRate={handleRateMovie}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 MovieReview App. Built with React, TailwindCSS, and love for movies.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Movie data is for demonstration purposes. Rate your favorite movies and discover new ones!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
