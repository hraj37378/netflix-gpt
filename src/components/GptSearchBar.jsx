import { useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[8%]">
      <form className="w-2/3 mx-auto grid grid-cols-12">
        <input
          className="col-span-9 px-6 bg-gray-200 rounded-3xl"
          type="text"
          placeholder={lang[langKey].placeholder}
        />
        <button className="ml-4 col-span-3 rounded-3xl bg-red-600 hover:bg-red-700 text-white px-4 py-2">
         {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
