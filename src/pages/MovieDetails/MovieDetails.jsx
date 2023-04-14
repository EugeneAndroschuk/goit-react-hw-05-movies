import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import GetMovies from 'services/fetchMovies';
import { GoBackBtn } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isMovie, setIsMovie] = useState(false);
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    const movieRequest = GetMovies.getMovieDetails(movieId);
    movieRequest.then(obj => {
      setMovie({ ...obj });
      setIsMovie(true);
    });
  }, [movieId]);

  return (
    <div>
      <section className={css['movie-details']}>
        <GoBackBtn to={goBackLink}>{`<-- Go back`}</GoBackBtn>
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
            <div>
              <h1>
                {movie.data.original_title} (
                {movie.data.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {Math.round(movie.data.vote_average * 10)}%</p>
              <p className={css['movie-prop']}>Overview</p>
              <p>{movie.data.overview}</p>
              <p className={css['movie-prop']}>Genres</p>
              <p>
                {movie.data.genres.reduce(
                  (acc, genre) => acc + genre.name + ' ',
                  ''
                )}
              </p>
            </div>
          </div>
        )}
      </section>

      <section className={css.information}>
        <h2 className={css['additional-info']}>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: goBackLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;