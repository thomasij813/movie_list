import MovieListItem from './MovieListItem.js';

const MovieList = ({movies}) => (
    <div className="ui segments">
        {movies.map((movie, i) => <MovieListItem key={i} movie={movie} />)}
    </div>
);

export default MovieList