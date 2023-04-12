import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMoviesSearch } from 'services/fetchMovies';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isFirstRender = useRef(true);

    useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
      }
      if (inputValue) return;
    const query = searchParams.get('query');
    if (query) {
      const movies = getMoviesSearch(query);
      movies.then(obj => {
        setMoviesSearch([...obj.data.results]);
        console.log('это ЮсЭффект');
      });
    }
  }, [inputValue, searchParams]);

  const handleValue = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    const movies = getMoviesSearch(inputValue);
    movies.then(obj => {
      setMoviesSearch([...obj.data.results]);
      console.log('это ОнСабмит');
    });
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
