import { useEffect, useRef, useState } from 'react';
import { Link} from 'react-router-dom';
import {getMoviesTrending} from 'services/fetchMovies';

const Home = () => {
  const isFirstRender = useRef(true);
  const [moviesTrend, setMoviesTrend] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const movies = getMoviesTrending();
    movies.then(obj => setMoviesTrend([...obj.data.results]));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {moviesTrend.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
