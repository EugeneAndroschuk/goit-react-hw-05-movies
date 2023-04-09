import { useEffect, useRef } from 'react';
import {
  fetchMoviesTrending,
  fetchMoviesSearch,
  fetchMovie,
} from 'services/fetchMovies';

const Home = () => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
       const moviesTrending = fetchMoviesTrending();
       moviesTrending.then(res => console.log(res)); 

        const moviesQuery = fetchMoviesSearch('batman');
        moviesQuery.then(res => console.log(res));

        const movie = fetchMovie('268');
        movie.then(res => console.log(res));
    }, []);

    return <h1>Trending today</h1>
}

export default Home;