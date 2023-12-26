
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    
    const movieData = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies =  useSelector((store) => store.movies.popularMovies);

    return(
        <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-2 md:pl-6 pt-2 relative z-20 overflow-hidden">
            <MovieList title="Now Playing" movieData={movieData}/>
            <MovieList title="Popular" movieData={popularMovies}/>
            <MovieList title="Trending" movieData={movieData}/>
            <MovieList title="Top Right Now" movieData={popularMovies}/>
            <MovieList title="Romance" movieData={movieData}/>
        </div>
        </div>
    );
}

export default SecondaryContainer;