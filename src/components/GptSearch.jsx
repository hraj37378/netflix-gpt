import React from "react";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
          <img
            src={NETFLIX_BACKGROUND}
            alt="background-image"
            className="w-full h-full"
          />
        </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
