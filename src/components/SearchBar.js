import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search movies..." }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="
          w-full pl-10 pr-10 py-3
          bg-white border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          placeholder-gray-400 text-gray-900
          transition-colors duration-200 ease-in-out
          shadow-sm hover:shadow-md
        "
        aria-label="Search movies"
      />

      {searchTerm && (
        <button
          onClick={clearSearch}
          className="
            absolute inset-y-0 right-0 pr-3
            flex items-center text-gray-400
            hover:text-gray-600 transition-colors
            focus:outline-none focus:text-gray-600
          "
          aria-label="Clear search"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
