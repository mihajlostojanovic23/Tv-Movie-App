import React from 'react'
import { getDiscoverMovies, searchMovies, getCategoryMovies, getImageUrl } from '../../api/services/apiService';

interface IMovie {
    data: {
        id: number,
        backdrop_path: string
    }
}

function Movie({ data}: IMovie) {
  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <div><img height={300} src={getImageUrl(data.backdrop_path)}/></div>
  )
}

export default Movie