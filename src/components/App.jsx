import MovieList from './MovieList.js';
import Input from './Input.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filterTerm: ''
    }
  }

  updateFilterTerm(filterTerm) {
    this.setState({ filterTerm });
  }

  filterMovies(term) {
    const filteredList = this.state.movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(term.toLowerCase());
    });
    return filteredList;
  }

  addMovie(title) {
    this.setState({
      movies: [...this.state.movies, { title }],
      filterTerm: ''
    });
  }

  render() {
    return (
        <div className="ui text container">
          <h1 className="ui aligned header">Movie List</h1>
          <Input handleSubmit={this.addMovie.bind(this)}>Add Movie</Input>
          <Input handleSubmit={this.updateFilterTerm.bind(this)} >Search</Input>
          <MovieList movies={this.filterMovies(this.state.filterTerm)}/>
        </div>
      );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
