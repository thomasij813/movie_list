import MovieList from './MovieList.js';
import Input from './Input.js';
import SubMenu from './SubMenu.js';
import AlertSegment from './AlertSegment.js'
import { searchMovie, searchDetails } from '../movieDb/movieDb.js';

let id = 0;

const getMovieDetails = (query) => {
  return searchMovie(query)
    .then(movies => searchDetails(movies.results[0].id))
    .then(movieDetails => ({
        title: movieDetails.title,
        releaseDate: movieDetails.release_date,
        runtime: movieDetails.runtime,
        voteAverage: movieDetails.vote_average,
        posterPath: movieDetails.poster_path}));
 
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filterTerm: '',
      watchedToggle: 'unwatched',
      displaySearchError: false
    }
  }

  toggleWatchedFilter() {
    const watchedToggle = this.state.watchedToggle === 'watched' ? 'unwatched' : 'watched'
    this.setState({ watchedToggle });
  }

  updateFilterTerm(filterTerm) {
    this.setState({ filterTerm });
  }

  toggleMovieWatched(id) {
    const movies = this.state.movies.slice();
    const movie = movies.filter(movie => movie.id === id)[0];
    movie.watched = !movie.watched
    this.setState({ movies });
  }

  filterMovies() {
    const term = this.state.filterTerm;
    const filteredList = this.state.movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      if (this.state.watchedToggle === 'unwatched') {
        return movieTitle.includes(term.toLowerCase()) && !movie.watched;
      } else {
        return movieTitle.includes(term.toLowerCase()) && movie.watched;
      }
    });
    return filteredList;
  }

  movieInList(title) {
    let f = this.state.movies.filter(movie => movie.title === title);
    return f.length > 0;
  }

  addMovie(title) {
    let watched = this.state.watchedToggle === 'watched';
    id += 1;
    getMovieDetails(title)
      .then(movieDetails => {
        if (this.movieInList(movieDetails.title)) {
          return;
        }
        this.setState({
          movies: [...this.state.movies, { title: movieDetails.title, watched, id, movieDetails }],
          filterTerm: ''
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({displaySearchError: true})
      });
  }

  render() {
    return (
        <div className="ui text container">
          <h1 className="ui aligned header">Movie List</h1>
          <Input handleSubmit={this.addMovie.bind(this)}>Add Movie</Input>
          {this.state.displaySearchError ? <AlertSegment color="red" >Movie not found</AlertSegment> : null}
          <SubMenu watchedToggle={this.state.watchedToggle}
            handleSearch={this.updateFilterTerm.bind(this)}
            handleToggle={this.toggleWatchedFilter.bind(this)} 
          />
          <MovieList movies={this.filterMovies(this.state.filterTerm)}
            handleMovieWatchedClick={this.toggleMovieWatched.bind(this)}
          />
        </div>
      );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
