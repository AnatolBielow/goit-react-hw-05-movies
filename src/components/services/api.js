import axios from 'axios';

const api_key = '2e4f63c1d817a4537d05d7d69983e338';
const URL = 'https://api.themoviedb.org/3';

const api = axios.create({ baseURL: URL, params: { api_key } });

export async function GetTrendingMovies() {
  const response = await api.get('trending/movie/day');
  return response.data.results;
}

export const GetMovieDetails = async id => {
  const response = await api.get(`movie/${id}`);
  return response.data;
};

export const SearchMovie = async query => {
  const response = await api.get(`search/movie?query=${query}`);
  return response.data.results
};

export const GetCast = async id => {
  const response = await api.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const GetReviews = async id => {
  const response = await api.get(`movie/${id}/reviews`);
  return response.data.results;
};
