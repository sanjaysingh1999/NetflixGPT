
import { BACKGROUND_IMG_URL } from "../utils/constansts";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptContainer = () => {
  return (
    <><div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BACKGROUND_IMG_URL} alt="background-image"></img>
      </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptContainer;
