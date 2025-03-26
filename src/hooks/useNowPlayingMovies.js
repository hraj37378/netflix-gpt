import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { API_OPTIONS } from '../utils/constants'
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(()=> {
    getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;