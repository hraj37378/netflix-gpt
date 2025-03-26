import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 pr-4">
      <img alt="movie-poster"
      src={IMAGE_CDN_URL+ posterPath}/>
    </div>
  )
}

export default MovieCard;