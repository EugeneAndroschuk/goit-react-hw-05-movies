import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetMovies from "services/fetchMovies";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  const [isCast, setIsCast] = useState(false);

  useEffect(() => {
    const castRequest = GetMovies.getMovieCast(movieId);
    castRequest.then(obj => {
      setCast({ ...obj });
      setIsCast(true);
    });
    
  }, [movieId]);

  return (
    <div>
      {isCast && (
        <ul>
          {cast.data.cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt=""
                width={100}
              /> : 'No Photo'}
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;