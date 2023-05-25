import React, { useEffect, useState } from 'react'
import { getDiscoverMovies, searchMovies, getCategoryMovies, getImageUrl } from '../../api/services/apiService';
import Movie from '../Movie';




function Movies() {
     const [movies, setMovies] = useState<any[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
      try {
        const data = await getDiscoverMovies();
          setMovies(data.results);
      } catch (error) {
        // Handle error
            console.log(error);
      }
    };

    fetchMovies();
    },[])
  return (
    <div className=' '>{movies.map((movie) => <Movie key={movie.id} data={ movie} />)}</div>
  )
}

export default Movies