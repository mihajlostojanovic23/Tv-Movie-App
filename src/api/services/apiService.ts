// api/services/apiService.ts
import axios, { AxiosInstance } from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const fetchData = async (url: string | any) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getDiscoverMovies = async () => {
  return await fetchData(process.env.REACT_APP_API_DISCOVERY);
};

export const searchMovies = async (query: string) => {
  const searchUrl = `${process.env.REACT_APP_API_SEARCH}${query}`;
  return await fetchData(searchUrl);
};

export const getCategoryMovies = async () => {
  return await fetchData(process.env.REACT_APP_CATEGORY_API);
};

export const getImageUrl = (path: string) => {
  return `${process.env.REACT_APP_IMG_API}${path}`;
};

export const getPosterUrl = (path: string) => {
  return `${process.env.REACT_APP_POSTER}${path}`;
};
