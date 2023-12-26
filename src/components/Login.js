import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMG_URL, USER_AVATAR } from "../utils/constansts";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  function handleSubmit() {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!signIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR
              ,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  function handleClick() {
    setSignIn(!signIn);
  }
  function handlePassClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <Header />
      <img
        className="absolute h-screen object-cover md:h-auto"
        src= {BACKGROUND_IMG_URL}
        alt="background-image"
      ></img>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-4/12 my-36 p-12 absolute bg-black opacity-90  mx-auto right-0 left-0  "
        >
          <h2 className="my-4 p-4 text-white font-bold text-3xl">
            {" "}
            {signIn ? "Sign In" : "Sign Up"}
          </h2>
          {!signIn && (
            <input
              ref={name}
              className="w-full my-4 p-4 flex flex-row bg-gray-900 text-white"
              type="text"
              placeholder="Name"
            ></input>
          )}
          <input
            ref={email}
            className="w-full my-4 p-4 flex flex-row bg-gray-900 text-white"
            type="text"
            placeholder="Email"
          ></input>

          <div className="flex justify-between">
            <input
              ref={password}
              className="w-full my-4 p-4   bg-gray-900 text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            ></input>
          <span className="flex justify-around items-center">
            {!showPassword ? (
              <Icon
                className=" bg-gray-900 mr-14 text-white absolute my-4 p-4 cursor-pointer "
                icon={eyeOff}
                onClick={handlePassClick}
                size={25}
              />
            ) : (
              <Icon
                className="bg-gray-900 mr-14 text-white absolute my-4 p-4 cursor-pointer"
                icon={eye}
                onClick={handlePassClick}
                size={25}
              />
            )}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full my-4 p-4  bg-red-600 text-center text-white font-bold"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="font-bold text-red-500">{errorMessage}</p>
          <h3 className="p-4 flex flex-row text-white" onClick={handleClick}>
            {signIn
              ? "New to Netflix? Sign up now."
              : "Already a user? Sign In now."}
          </h3>
        </form>
      </div>
    </div>
  );
};
export default Login;
