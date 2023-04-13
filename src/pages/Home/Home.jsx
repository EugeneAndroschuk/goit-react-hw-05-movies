import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GetMovies from 'services/fetchMovies';
import css from './Home.module.css';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const movies = GetMovies.getMoviesTrending();
    movies.then(obj => setMoviesTrend([...obj.data.results]));
  }, []);

  return (
    <div className={css['home-page']}>
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
    </div>
  );
};

export default Home;
