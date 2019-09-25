import MovieList from './MovieList.js';
import Input from './Input.js';
import SubMenu from './SubMenu.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filterTerm: '',
      watchedToggle: 'unwatched'
    }
  }

  toggleWatchedFilter() {
    const watchedToggle = this.state.watchedToggle === 'watched' ? 'unwatched' : 'watched'
    this.setState({ watchedToggle });
  }

  updateFilterTerm(filterTerm) {
    this.setState({ filterTerm });
  }

  toggleMovieWatched(i) {
    const movies = this.state.movies.slice();
    movies[i].watched = !movies[i].watched
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

  addMovie(title) {
    this.setState({
      movies: [...this.state.movies, { title, watched: false }],
      filterTerm: ''
    });
  }

  render() {
    return (
        <div className="ui text container">
          <h1 className="ui aligned header">Movie List</h1>
          <Input handleSubmit={this.addMovie.bind(this)}>Add Movie</Input>
          <SubMenu watchedToggle={this.state.watchedToggle}
            handleSubmit={this.updateFilterTerm.bind(this)}
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
