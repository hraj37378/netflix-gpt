import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED } from "../utils/constants";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED, API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  });
};

export default useTopRatedMovies;
