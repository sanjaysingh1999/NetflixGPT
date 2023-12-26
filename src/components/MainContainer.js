import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground";
import VidoeTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    
    if(!movies) return; //early return

    const {original_title,overview,id} = movies[0];
    return(
        <div className="pt-[30%] bg-black md:pt-0">
            <VidoeTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    );
}


export default MainContainer;