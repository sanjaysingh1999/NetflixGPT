import { MOVIE_IMG_CDN } from "../utils/constansts";

const MovieCard = ({poster_path}) => {
    if(!poster_path)return;
    return (
    <div  className="w-36 md:w-48 pr-3"> 
        <img className="" alt="Movie Image" src={MOVIE_IMG_CDN+poster_path}></img>
    </div>
        );
}

export default MovieCard;