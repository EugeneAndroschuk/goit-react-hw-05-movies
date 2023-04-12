import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import GetMovies from 'services/fetchMovies';

const MovieDetails = () => {
  // const isFirstRender = useRef(true);
  const isFirstRenderLocation = useRef(true);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isMovie, setIsMovie] = useState(false);
  const [movieLocation, setMovieLocation] = useState();
  const location = useLocation();

  useEffect(() => {
    if (isFirstRenderLocation.current) {
      if (location.state) setMovieLocation({ ...location.state.from });
      else setMovieLocation({ }) ;
      isFirstRenderLocation.current = false;
      return;
    }
  } ,[location]);


  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    const movieRequest = GetMovies.getMovieDetails(movieId);
    movieRequest.then(obj => {
      setMovie({ ...obj });
      setIsMovie(true);
    });
  }, [movieId]);

  return (
    <div className={css['movies-page']}>
      <Link to={movieLocation ? movieLocation : '/'}>{`<-- Go back`}</Link>
      {isMovie && (
        <div className={css['movie-card']}>
          {movie.data.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.data.poster_path}`}
              alt=""
            />
          ) : (
            'No Poster'
          )}
          <div className={css['movie-info']}>
            <h1>{movie.data.original_title}</h1>
            <p>{movie.data.release_date}</p>
            <p>Overview</p>
            <p>{movie.data.overview}</p>
            <p>Genres</p>
            <p>
              {movie.data.genres.reduce(
                (acc, genre) => acc + genre.name + ' ',
                ''
              )}
            </p>
          </div>
        </div>
      )}
      <section className={css.information}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Go to Cast</Link>
          </li>
          <li>
            <Link to="reviews">Go to Reviews</Link>
          </li>
        </ul>
      </section>

      <Outlet />
    </div>
  );
};

export default MovieDetails;