import config from '../../config/movieDb.config.js';

const callApi = (url) => fetch(url).then(results => results.json());

const searchMovie = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${config.apiKey}`;
    return callApi(url);
};

const searchDetails = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.apiKey}`;
    return callApi(url);
}

export { searchMovie, searchDetails };