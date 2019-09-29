let parseReleaseDate = (dateString) => {
    let arr = dateString.split('-');
    let d = new Date(arr[0], arr[1] - 1, arr[2]);
    return d.toLocaleDateString(undefined, {dateStyle: 'medium'});
}

const MovieDetails = ({movieDetails}) => {
    let releaseDate = parseReleaseDate(movieDetails.releaseDate);
    return (
        <div className="ui basic segment">
            <div className="ui small left floated image">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.posterPath}`} />
            </div>
            <div>
                <p><strong>Release Date: </strong>{releaseDate}</p>
                <p><strong>Runtime: </strong>{movieDetails.runtime} min</p>
                <p><strong>Average Viewer Rating: </strong>{movieDetails.voteAverage}</p>
            </div>
        </div>
    );
};

export default MovieDetails;