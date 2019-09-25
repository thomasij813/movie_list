import Button from './button.js';

const MovieListItem = ({movie, index, handleMovieWatchedClick}) => {
    const handleClick = () => {
        handleMovieWatchedClick(index);
    };

    return (
        <div className="item">
            <div className="content">
                <a className="header">{movie.title}</a>
                <Button additionalUiClasses={`right floated ${movie.watched ? 'green' : null}`}
                    handleClick={handleClick}
                >
                    Watched
                </Button>
            </div>
        </div>
    );
}

export default MovieListItem;