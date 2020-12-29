import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '3011823430ba4360f934c80b54c0176e';

const trendingMovies = () => {
  return axios(`/trending/movie/day?api_key=${apiKey}`)
  .then(response => response.data.results,
    );
};

const searchMovies = (querySearch) => {
    return axios(`/search/movie?api_key=${apiKey}&query=${querySearch}`)
    .then(response => response.data.results,
    );
};

const detailsMovies = (id) => {
    return axios(`/movie/${id}?api_key=${apiKey}`)
    .then(response => response.data,
    );
};

const castMovies = (id) => {
    return axios(`/movie/${id}/credits?api_key=${apiKey}`)
    .then(response => response.data.cast,
    );
};

const reviewsMovies = (id) => {
    return axios(`/movie/${id}/reviews?api_key=${apiKey}`)
    .then(response => response.data.result,
    );
};



export default {
    trendingMovies,
    searchMovies,
    detailsMovies,
    castMovies,
    reviewsMovies,
};
