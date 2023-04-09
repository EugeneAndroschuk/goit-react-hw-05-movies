import axios from 'axios';

const API_KEY = '57ffb78434af41b6f3367e52cfbaed8d';
const URL = 'https://api.themoviedb.org/3/'

 export function fetchMoviesTrending() {
    return axios.get(
      `${URL}trending/movie/day?api_key=${API_KEY}`
    );
}

 export function fetchMoviesSearch(query) {
    return axios.get(
      `${URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
}

export function fetchMovie(movieId) {
  return axios.get(
    `${URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}