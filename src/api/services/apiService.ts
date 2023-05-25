// api/services/apiService.ts
import axios from 'axios';

const API_DISCOVERY = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
const IMG_API = 'https://image.tmdb.org/t/p/w400/';
const POSTER = 'https://image.tmdb.org/t/p/w1280/';
const Category_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27&page=1`;

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getDiscoverMovies = async () => {
  return await fetchData(API_DISCOVERY);
};

export const searchMovies = async (query: string) => {
  const searchUrl = `${API_SEARCH}${query}`;
  return await fetchData(searchUrl);
};

export const getCategoryMovies = async () => {
  return await fetchData(Category_API);
};

export const getImageUrl = (path: string) => {
  return `${IMG_API}${path}`;
};

export const getPosterUrl = (path: string) => {
  return `${POSTER}${path}`;
};