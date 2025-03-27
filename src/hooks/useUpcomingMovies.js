import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants"
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }
    useEffect(() => {
        getUpcomingMovies();
    });
}

export default useUpcomingMovies;