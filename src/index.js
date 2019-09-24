// TODO: Render the `App` component to the DOM
import App from './components/App.js';

import movies from './data/movies.js'

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));