import MovieListItem from './MovieListItem.js';

const MovieList = ({movies, handleMovieWatchedClick}) => (
    <div className="ui items">
        {movies.map((movie, i) => 
            <MovieListItem key={i} movie={movie} index={i}
              handleMovieWatchedClick={handleMovieWatchedClick}
        />)}
    </div>
);

export default MovieList