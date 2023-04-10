import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchMovie } from 'services/fetchMovies';

const MovieDetails = () => {
  const isFirstRender = useRef(true);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isMovie, setIsMovie] = useState(false);

  // function onGetMovie() {
  //   const movieRequest = fetchMovie(movieId);
  //   movieRequest.then(obj => {
  //     return {...obj};
  //     // console.log(obj);
  //   });
  // }
  

  // const movieRequest = fetchMovie(movieId);
  // movieRequest.then(obj => setMovie({...obj}));

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const movieRequest = fetchMovie(movieId);
    movieRequest.then(obj => {
      setMovie({ ...obj });
      setIsMovie(true);
    });
  }, [movieId]);

  useEffect(() => {
    if (isMovie) console.log('обновили стейт movie: ', movie.data);
}, [isMovie, movie]);

  return (
    <div>
      {isMovie && (
        <div className={css['movie-card']}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.data.poster_path}`}
            alt=""
          />
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
      )}
      <ul>
        <li>
          <Link to="cast">Go to Cast</Link>
        </li>
        <li>
          <Link to="reviews">Go to Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default MovieDetails;