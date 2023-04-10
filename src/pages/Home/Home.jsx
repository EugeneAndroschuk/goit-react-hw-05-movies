import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  fetchMoviesTrending,
  fetchMoviesSearch,
  fetchMovie,
} from 'services/fetchMovies';

const Home = () => {
  const isFirstRender = useRef(true);
  const location = useLocation();
  const [moviesTrend, setMoviesTrend] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const movies = fetchMoviesTrending();
    movies.then(obj => {
      console.log(obj.data.results);
      setMoviesTrend([...obj.data.results]);
    });

    // const moviesQuery = fetchMoviesSearch('batman');
    // moviesQuery.then(res => console.log(res));

    const movie = fetchMovie('502356');
    movie.then(res => console.log(res));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {moviesTrend.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
