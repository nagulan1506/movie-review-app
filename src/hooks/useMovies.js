import { useState, useMemo } from 'react';
import { moviesData } from '../data/movies';

const useMovies = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Filter movies based on search term, genre, and year
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'All Genres' || movie.genre.includes(selectedGenre);
      const matchesYear = selectedYear === 'All Years' || movie.year.toString() === selectedYear;

      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [movies, searchTerm, selectedGenre, selectedYear]);

  // Update user rating for a specific movie
  const updateMovieRating = (movieId, rating) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, userRating: rating }
          : movie
      )
    );
  };

  // Get movie by ID
  const getMovieById = (id) => {
    return movies.find(movie => movie.id === parseInt(id));
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGenre('All Genres');
    setSelectedYear('All Years');
  };

  // Get unique genres from movies
  const availableGenres = useMemo(() => {
    const allGenres = movies.flatMap(movie => movie.genre);
    return ['All Genres', ...new Set(allGenres)].sort();
  }, [movies]);

  // Get unique years from movies
  const availableYears = useMemo(() => {
    const allYears = movies.map(movie => movie.year);
    return ['All Years', ...new Set(allYears)].sort((a, b) => {
      if (a === 'All Years') return -1;
      if (b === 'All Years') return 1;
      return b - a;
    });
  }, [movies]);

  // Get statistics
  const stats = useMemo(() => {
    return {
      totalMovies: movies.length,
      filteredCount: filteredMovies.length,
      averageRating: movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length,
      ratedMovies: movies.filter(movie => movie.userRating !== null).length
    };
  }, [movies, filteredMovies]);

  return {
    movies: filteredMovies,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    selectedYear,
    setSelectedYear,
    selectedMovie,
    setSelectedMovie,
    updateMovieRating,
    getMovieById,
    resetFilters,
    availableGenres,
    availableYears,
    stats
  };
};

export default useMovies;
