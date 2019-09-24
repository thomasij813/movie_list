import MovieList from './MovieList.js';
import Search from './Search.js'

import movieData from '../data/movies.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filterTerm: '',
      loading: true
    }
  }

  updateFilterTerm(filterTerm) {
    this.setState({ filterTerm });
  }

  componentDidMount() {
    console.log(movieData)
    this.setState({ 
      movies: movieData,
      loading: false
    });
  }

  filterMovies(term) {
    const filteredList = this.state.movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(term.toLowerCase());
    });
    return filteredList;
  }

  render() {
    return this.state.loading ? 
      <div>Loading...</div> : 
      (
        <div className="ui text container">
          <h1 className="ui aligned header">Movie List</h1>
          <Search handleSearch={this.updateFilterTerm.bind(this)} />
          <MovieList movies={this.filterMovies(this.state.filterTerm)}/>
        </div>
      )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
