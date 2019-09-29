import Button from './Button.js';
import MovieDetails from './MovieDetails.js'

class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            detailsToggle: true
        };
    }

    handleWatchedClick(e) {
        e.stopPropagation();
        this.props.handleMovieWatchedClick(this.props.movie.id);
    };

    togglePanel() {
        let detailsToggle = !this.state.detailsToggle;
        this.setState({ detailsToggle });
    };

    render() {
        return (
            <div className="item">
                <div className="content">
                    <div className="ui content">
                        <div className="ui basic segment">
                            <a className="ui large header" 
                              onClick={this.togglePanel.bind(this)}>
                                {this.props.movie.title}
                            </a>
                            <Button additionalUiClasses={`right floated ${this.props.movie.watched ? 'green' : null}`}
                                handleClick={this.handleWatchedClick.bind(this)}
                            >
                                Watched
                            </Button>
                        </div>
                        {this.state.detailsToggle ? <MovieDetails movieDetails={this.props.movie.movieDetails} /> : null }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieListItem;