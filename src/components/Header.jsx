import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../redux/gptSearchSlice";
import { changeLanguage } from "../redux/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={NETFLIX_LOGO} alt="netflix-logo" />

      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="bg-black text-red-600 py-1 rounded-3xl"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((val, index) => (
                <option key={index} value={val.identifier}>
                  {val.language}
                </option>
              ))}
            </select>
           )}
          <button
            onClick={handleGptSearch}
            className="mx-4 bg-indigo-600 text-white px-6 py-1 rounded-2xl hover:bg-indigo-700"
          >
           {showGptSearch? "HomePage": "GPTSearch" }
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 bg-red-600 text-white py-1 rounded-2xl hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
