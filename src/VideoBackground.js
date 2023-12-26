import { useEffect } from "react";
import { MOVIE_OPTIONS } from "./utils/constansts";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailerData } from "./utils/moviesSlice";
import useVideoTrailer from "./hooks/useVideoTrailer";

const VideoBackground = ({ movieId }) => {
  useVideoTrailer(movieId);
  const trailerVideo = useSelector(store=>store.movies?.movieTrailerData);
  
  return (
    <div className="">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
