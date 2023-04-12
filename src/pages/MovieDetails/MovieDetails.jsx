import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { getMovieDetails } from 'services/fetchMovies';

const MovieDetails = () => {
  const isFirstRender = useRef(true);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isMovie, setIsMovie] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location.state?.from);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const movieRequest = getMovieDetails(movieId);
    movieRequest.then(obj => {
      setMovie({ ...obj });
      setIsMovie(true);
      console.log('movie info', obj)
    });
  }, [movieId]);

//   useEffect(() => {
//     if (isMovie) console.log('обновили стейт movie: ', movie.data);
// }, [isMovie, movie]);

  return (
    <div className={css['movies-page']}>
      <Link to={backLinkHref}>{`<-- Go back`}</Link>
      {isMovie && (
        <div className={css['movie-card']}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.data.poster_path}`}
            alt=""
          />
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