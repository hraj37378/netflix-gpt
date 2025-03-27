import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-12">
        <h1 className="text-xl py-2 text-red-600 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
