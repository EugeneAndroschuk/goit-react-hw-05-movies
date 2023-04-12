import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovies from 'services/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [isReviews, setIsReviews] = useState(false);
  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    const movieReviews = GetMovies.getMovieReviews(movieId);
    movieReviews.then(obj => {
      setReviews({ ...obj });
      setIsReviews(true);
    });
  }, [movieId]);

  return (
    <div>
      {isReviews &&
        (reviews.data.results.length === 0 ? (
          <p>We don't have any reviws for this movie</p>
        ) : (
          <ul>
            {reviews.data.results.map(result => (
              <li key={result.id}>
                <p>Author: {result.author}</p>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};

export default Reviews;
