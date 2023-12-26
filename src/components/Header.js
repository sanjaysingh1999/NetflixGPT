import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constansts";
import { setShowGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptViewOn = useSelector(store=>store.gpt.showGPT);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGPTClick = () => {
    dispatch(setShowGpt());
  };

  
  
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen justify-between flex flex-col absolute z-10 bg-gradient-to-b from-black md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo"></img>

      {user && (
        <div className="flex p-2 justify-between">
          {gptViewOn && <select className="bg-gray-800 m-2 p-2 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="bg-purple-600 m-2 p-2 rounded-xl text-white font-bold cursor-pointer" onClick={handleGPTClick}>
            {gptViewOn ? "Home":"Netflix GPT"}
          </button>
          <img
            className="hidden md:inline-block w-12 h-12 m-1 p-1 "
            alt="sign out logo"
            src={user?.photoURL}
          ></img>

          <button
            className="cursor-pointer text-white font-bold"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
