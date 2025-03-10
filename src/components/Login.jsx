import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleSignUp = () => {
    setSignIn(!isSignIn);
  }
  return (
    <div>
    <Header/>
    <div className="absolute w-full h-screen">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="background-image" className="w-full h-full" />
    </div>
    <form className="w-6/12 absolute p-10 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="text-3xl font-bold py-4 mx-auto">{isSignIn? "Sign In": "Sign Up"}</h1>
    {!isSignIn && <input type="text" placeholder="Enter your name" className="my-2 mx-5 p-2 w-full rounded-lg bg-gray-800 border"/>}
    <input type="text" placeholder="Email or mobile number" className="p-2 mx-auto my-2 w-full rounded-lg bg-gray-800 border"/>
    <input type="text" placeholder="Password" className="my-2 mx-auto p-2 w-full rounded-lg bg-gray-800 border"/>
    <button className="p-2 mx-auto my-6 bg-red-600 w-full h-10 rounded-lg hover:bg-red-700">{isSignIn?"Sign In" : "Sign Up"}</button>
    <span className="p-2 mx-auto text-gray-400">{isSignIn? "New to Netflix?": "Already a member"}</span>
    <span className="font-bold cursor-pointer" onClick={handleSignUp}>{isSignIn? "Sign up": "Sign In"}</span>
    </form>
    </div>
  );
};

export default Login;
