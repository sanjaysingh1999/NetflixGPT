import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { useRef } from "react";
import { MOVIE_OPTIONS } from "../utils/constansts";
import { addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const tmdbSearchMovie = async(movie_name) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie_name+'&include_adult=false&language=en-US&page=1', MOVIE_OPTIONS)
    const json = await data.json();
    return json.results;
}
  const gptSearchText = useRef(null);
  
  const handleGptSearchClick = async() => {
    const gptQuery = "Act as a movie recommendation system & suggest some movies of the query "+gptSearchText.current.value + ". Only give me name of 5 movie names, comma separated like the example result given ahead. Example Result: Don, Tum Mile, Raaz, Ram, Sita.";
      const gptFetchData = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptFetchData.choices[0]?.message?.content);
      const gptMovieList = gptFetchData.choices?.[0]?.message?.content.split(",");
      const tmdbMoviePromise = gptMovieList.map(movie => tmdbSearchMovie(movie));
      const tmdbMovieList = await Promise.all(tmdbMoviePromise);
      console.log(tmdbMovieList);
      dispatch(addGptMovieResult({movieNames:gptMovieList,movieResults:tmdbMovieList}));
   
  }
  const languageIdentifier = useSelector(store => store.config.language);
  return (
    <div className="flex justify-center pt-[35%]  md:pt-[5%]">
      <form className=" bg-black grid grid-cols-12 w-full md:w-1/2 rounded-xl" onSubmit={(e)=> e.preventDefault()}>
        <input
        ref={gptSearchText}
          className="col-span-9 p-4  m-4"
          placeholder={lang[languageIdentifier].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 bg-red-700 py-2 m-4  text-white rounded-lg " onClick={handleGptSearchClick}>
          {lang[languageIdentifier].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
