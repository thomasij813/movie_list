import MovieList from './MovieList.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ui text container">
        <h1 className="ui aligned header">Movie List</h1>
        <MovieList movies={this.props.movies}/>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
