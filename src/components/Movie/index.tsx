import React from 'react';
import { getImageUrl } from '../../api/services/apiService';

interface IMovie {
  data: {
    id: number;
    backdrop_path: string;
  };
}

function Movie({ data }: IMovie) {
  return (
    <div>
      <img height={300} src={getImageUrl(data.backdrop_path)} />
    </div>
  );
}

export default Movie;
