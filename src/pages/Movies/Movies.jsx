import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetMovies from 'services/fetchMovies';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (inputValue) return;
    const query = searchParams.get('query');
    if (query) {
      const movies = GetMovies.getMoviesSearch(query);
      movies.then(obj => setMoviesSearch([...obj.data.results]));
    }
  }, [inputValue, searchParams]);

  const handleValue = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    const movies = GetMovies.getMoviesSearch(inputValue);
    movies.then(obj => setMoviesSearch([...obj.data.results]));
  };

  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <input type="text" value={inputValue} onChange={handleValue} />
        <button type="submit">Search</button>
      </form>
      {moviesSearch.length > 0 && (
        <ul>
          {moviesSearch.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
