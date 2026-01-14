# Movie Review App - Quick Setup Guide

This guide will help you set up and run the Movie Review Application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Quick Setup (Recommended)

### Option 1: Using the Demo HTML File

For a quick preview of the design and layout:

1. Navigate to the project folder:
   ```bash
   cd "C:\guvi\New folder\movie-review-app"
   ```

2. Open the demo file in your browser:
   ```bash
   # On Windows
   start demo.html
   
   # Or simply double-click demo.html in File Explorer
   ```

This will show you the static version of the Movie Review App with TailwindCSS styling.

### Option 2: Full React Application Setup

1. **Install Dependencies**
   ```bash
   cd "C:\guvi\New folder\movie-review-app"
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   The app should automatically open at `http://localhost:3000`

## Troubleshooting

### Common Issues and Solutions

#### Issue: npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rmdir /s node_modules
del package-lock.json

# Reinstall
npm install
```

#### Issue: Port 3000 is already in use
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or start on different port
set PORT=3001 && npm start
```

#### Issue: Build fails due to warnings
```bash
# Ignore warnings and build anyway
set CI=false && npm run build
```

### Alternative Setup Methods

#### Method 1: Using Yarn (if preferred)
```bash
yarn install
yarn start
```

#### Method 2: Using npx for Create React App
```bash
npx create-react-app movie-review-new
cd movie-review-new
# Then copy our source files over
```

#### Method 3: Manual Setup with Vite (Modern Alternative)
```bash
npm create vite@latest movie-review-vite -- --template react
cd movie-review-vite
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Then copy our source files
```

## Project Structure Overview

```
movie-review-app/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # App header with stats
│   │   ├── SearchBar.js    # Search functionality
│   │   ├── FilterDropdown.js # Filter controls
│   │   ├── MovieCard.js    # Individual movie cards
│   │   ├── MovieModal.js   # Movie details modal
│   │   └── StarRating.js   # Rating system
│   ├── data/
│   │   └── movies.js       # Mock movie data
│   ├── hooks/
│   │   └── useMovies.js    # Custom React hook
│   ├── App.js              # Main app component
│   ├── App.css             # TailwindCSS styles
│   └── index.js            # React entry point
├── demo.html               # Static demo version
├── package.json            # Dependencies
├── tailwind.config.js      # TailwindCSS config
├── postcss.config.js       # PostCSS config
└── README.md               # Documentation
```

## Features Testing Checklist

Once the app is running, test these features:

### ✅ Basic Functionality
- [ ] Movies display in grid layout
- [ ] Movie cards show poster, title, year, genre
- [ ] Responsive design works on different screen sizes

### ✅ Search & Filter
- [ ] Search by movie title works
- [ ] Genre filter dropdown functions
- [ ] Year filter dropdown functions
- [ ] Multiple filters can be combined
- [ ] Reset filters button works
- [ ] Active filters are displayed

### ✅ Rating System
- [ ] Click stars to rate movies (1-5 stars)
- [ ] Star hover effects work
- [ ] Ratings persist during session
- [ ] User ratings display on cards

### ✅ Movie Details
- [ ] Click movie card opens modal
- [ ] Modal shows detailed information
- [ ] Cast, director, plot information displays
- [ ] Rating works in modal
- [ ] Close modal functionality

### ✅ User Interface
- [ ] Smooth animations and transitions
- [ ] Header statistics update correctly
- [ ] Loading states and error handling
- [ ] Accessibility features (keyboard navigation)

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Browser Compatibility

The app is compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Enable React Developer Tools** for debugging
2. **Use browser dev tools** to check responsive design
3. **Monitor network tab** for image loading performance
4. **Check console** for any JavaScript errors

## Next Steps

After successfully running the app:

1. **Explore the Code**: Check out the component structure in `src/components/`
2. **Modify Movie Data**: Edit `src/data/movies.js` to add your favorite movies
3. **Customize Styling**: Modify `tailwind.config.js` for custom themes
4. **Add Features**: Consider adding user accounts, movie reviews, or API integration

## Support

If you encounter any issues:

1. Check this setup guide first
2. Look at browser console for error messages
3. Ensure all dependencies are properly installed
4. Try the demo.html file to verify styling works
5. Check Node.js and npm versions match requirements

## API Integration (Future Enhancement)

To connect with a real movie API like OMDB:

1. Get API key from [OMDB API](http://www.omdbapi.com/)
2. Create `.env` file in project root
3. Add: `REACT_APP_OMDB_API_KEY=your_api_key_here`
4. Modify the `useMovies` hook to fetch from API

---

**Happy coding! 🎬🍿**