import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constansts";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=> store.movies.popularMovies);

    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', MOVIE_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
   }

    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;