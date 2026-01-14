# Movie Review App

A modern, responsive movie review application built with React JS and TailwindCSS. Users can search, filter, and rate their favorite movies with an intuitive star-based rating system.

![Movie Review App](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Movie+Review+App)

## 🎬 Features

### Core Functionality
- **Movie Listings**: Browse a curated collection of popular movies with detailed information
- **Smart Search**: Find movies quickly by title with real-time search results
- **Advanced Filtering**: Filter movies by genre, release year, and rating
- **Detailed Movie Views**: Click on any movie to see comprehensive details including plot, cast, director, and ratings
- **Star Rating System**: Rate movies from 1-5 stars with interactive visual feedback
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Intuitive Interface**: Clean, modern design with smooth animations
- **Visual Feedback**: Hover effects, loading states, and interactive elements
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized filtering and search with React hooks
- **Statistics Dashboard**: Track your movie watching and rating progress

## 🛠️ Tech Stack

- **Frontend Framework**: React JS (v18+)
- **Styling**: TailwindCSS for modern, responsive design
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Icons**: Heroicons via SVG
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-review-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Browsing Movies
- View all movies in a responsive grid layout
- Each movie card displays poster, title, year, genre, and director
- Movies show IMDb ratings and your personal ratings

### Searching Movies
- Use the search bar to find movies by title
- Search is case-insensitive and provides real-time results
- Clear search with the 'X' button

### Filtering Movies
- **Genre Filter**: Select from available genres (Action, Drama, Comedy, etc.)
- **Year Filter**: Filter by release year
- **Combined Filters**: Use search and filters together for precise results

### Rating Movies
- Click on stars to rate movies (1-5 stars)
- Ratings are saved and displayed on movie cards
- View your rating in the detailed movie modal

### Movie Details
- Click any movie card to open detailed information
- View plot summary, cast, director, runtime, and more
- Rate movies directly from the detail modal
- Close modal by clicking outside or using the close button

## 🏗️ Project Structure

```
movie-review-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   ├── FilterDropdown.js
│   │   ├── MovieCard.js
│   │   ├── MovieModal.js
│   │   └── StarRating.js
│   ├── data/
│   │   └── movies.js
│   ├── hooks/
│   │   └── useMovies.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Components Overview

### Core Components

- **`Header`**: App branding, statistics, and reset filters functionality
- **`SearchBar`**: Real-time movie search with clear functionality
- **`FilterDropdown`**: Reusable dropdown for genre and year filtering
- **`MovieCard`**: Individual movie display with poster, details, and rating
- **`MovieModal`**: Detailed movie information in a modal overlay
- **`StarRating`**: Interactive star rating component with hover effects

### Custom Hooks

- **`useMovies`**: Central state management for movies, filters, and ratings

### Data Management

- **`movies.js`**: Mock movie data with comprehensive movie information

## 🎯 Features in Detail

### Search Functionality
- Real-time search as you type
- Case-insensitive matching
- Search by movie title
- Clear search option

### Filter System
- **Genre Filtering**: 10+ genre categories
- **Year Filtering**: Filter by release decade or specific year
- **Combined Filtering**: Stack multiple filters
- **Active Filter Display**: Visual indicators for active filters
- **Reset Functionality**: Clear all filters instantly

### Rating System
- **Interactive Stars**: Click to rate, hover for preview
- **Visual Feedback**: Different star states for rating and hover
- **Persistent Ratings**: Ratings saved in component state
- **Rating Display**: Show both IMDb and user ratings

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhancement**: Rich desktop experience
- **Flexible Grid**: Auto-adjusting movie grid
- **Touch Friendly**: Large touch targets for mobile

## 🚀 Performance Features

- **Memoized Filtering**: Optimized with React.useMemo
- **Lazy Loading**: Images load as needed
- **Efficient Re-renders**: Minimized unnecessary updates
- **Smooth Animations**: CSS transitions and transforms
- **Optimized Images**: Fallback for missing movie posters

## 🎨 Styling Features

- **Modern Design**: Clean, minimalist interface
- **Smooth Animations**: Hover effects and transitions
- **Custom Color Palette**: Consistent brand colors
- **Shadow System**: Layered shadows for depth
- **Typography**: Readable fonts with proper hierarchy

## 🔧 Customization

### Adding New Movies
Edit `src/data/movies.js` to add more movies:

```javascript
{
  id: 21,
  title: "Your Movie Title",
  poster: "movie-poster-url",
  year: 2024,
  genre: ["Genre1", "Genre2"],
  rating: 8.5,
  director: "Director Name",
  cast: ["Actor 1", "Actor 2"],
  plot: "Movie description...",
  // ... other properties
}
```

### Customizing Styles
Modify `tailwind.config.js` for theme customization:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Movie data inspired by IMDb
- Icons from Heroicons
- Design inspiration from modern movie platforms
- React community for excellent documentation

## 📞 Support

If you have any questions or run into issues:

1. Check the documentation above
2. Look at the code comments in the components
3. Create an issue in the repository
4. Contact the development team

---

**Enjoy rating your favorite movies! 🍿**