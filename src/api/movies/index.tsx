import axios from '../axiosInstance';

export const fetchDiscoverMovies = (page: number) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_DISCOVERY}`,
    params: {
      page: page,
    },
  });
};

export const searchMovies = async (query: string) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_DISCOVERY}`,
    params: query,
  });
};

export const getCategoryMovies = async () => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_CATEGORY_API}`,
  });
};

export const getImageUrl = (path: string) => {
  return `${process.env.REACT_APP_IMG_API}${path}`;
};

export const getPosterUrl = (path: string) => {
  return `${process.env.REACT_APP_POSTER}${path}`;
};
