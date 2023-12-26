import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames)return;

    return(
<div className="m-4 p-4 bg-black opacity-90 text-white"> 
    {movieNames?.map((movie,index) => (<MovieList key={movie} title={movie} movieData={movieResults[index]} />))}
      </div>
    );
}

export default GptMovieSuggestions;