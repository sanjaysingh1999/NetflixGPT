
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptContainer from "./GptContainer";


const Browse = ()=>{
    const gptViewOn = useSelector(store=>store.gpt.showGPT);
    useNowPlayingMovies();
    usePopularMovies();

    return (<div>
         <Header/>
         {gptViewOn ? <GptContainer/>:<><MainContainer/>
         <SecondaryContainer/></>}
    </div>)
}
export default Browse;