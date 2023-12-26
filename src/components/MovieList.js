import MovieCard from "./MovieCard";


const MovieList = ({ title, movieData}) => {
  

  return (
    <div className="px-6  my-4">
    <div className="text-xl md:text-2xl py-6  text-white ">{title}</div>
    <div className="flex  overflow-x-scroll   ">
      
      <div className="flex ">
        {movieData?.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
