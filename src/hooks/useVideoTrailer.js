import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constansts";
import { addMovieTrailerData } from "../utils/moviesSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
    const videoTrailer = useSelector(store=> store.movies.movieTrailerData);

    const getMovieVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          MOVIE_OPTIONS
        );
        const json = await data.json();
        const movieData = json.results.filter((video) => video.type === "Trailer");
        const trailer = movieData.length ? movieData[0] : json.results[0];
        dispatch(addMovieTrailerData(trailer));
      };
      useEffect(() => {
        !videoTrailer && getMovieVideo();
      }, []);
}

export default useVideoTrailer;