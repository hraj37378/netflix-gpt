import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../redux/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+ "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    const movieVideos = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = movieVideos.length ? movieVideos[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
