import React from "react";
import front from "../images/login-bg.jpg";
import logo from "../images/news-logo.jpg";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(auth);

  return (
    <div className="grid grid-cols-2  bg-black h-screen">
      {/* left block */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <img src={logo} alt="" className="h-14 mx-auto" />
          <h1 className="text-white text-xl font-semibold mt-2">News App</h1>
          <button
            onClick={googleSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 w-96 mt-14"
          >
            Sign in
          </button>
          {/* <h2 className="text-blue-500 underline mt-7">Sign up now</h2> */}
        </div>
      </div>

      {/*right block  */}
      <div>
        <img src={front} alt="login-page-image" />
      </div>
    </div>
  );
}

export default Signin;
