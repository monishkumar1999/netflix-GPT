import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidate } from "./Utils/checkValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isSignin, setSignin] = useState(true);

  const [validerror, setValiderror] = useState(null);

  function toggleSignForm() {
    setSignin(!isSignin);
  }

  const email = useRef(null);
  const password = useRef(null);

  function hasFormSubmit() {
    const thevalidateResult = checkValidate(
      email.current.value,
      password.current.value
    );
    setValiderror(thevalidateResult);

    if (validerror) {
      return;
    }

    //  sign in signup logic

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          setValiderror("Successfully created ");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValiderror(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setValiderror("logged successfully");
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValiderror(errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />

      <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center flex-col items-center bg-black bg-opacity-60 p-8 h-auto rounded-md"
        >
          <h1 className="text-white text-3xl font-bold ">
            {isSignin ? "signin" : "signup"}
          </h1>

          {!isSignin && (
            <input
              className="p-3 w-60 m-4 rounded bg-gray-700 border  border-b-gray-50"
              type="text"
              placeholder="Enter Full Name"
            />
          )}
          <input
            ref={email}
            className="p-3 w-60 m-4 rounded bg-gray-700 border  border-b-gray-50"
            type="email"
            placeholder="Please Enter The Email"
          />
          <input
            ref={password}
            className="p-3 w-60 m-4 rounded bg-gray-700 border  border-b-gray-50"
            type="password"
            placeholder="Please Enter The Password"
          />
          <p className="text-red-600 p-3 font-bold ">{validerror}</p>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded mt-4 w-60"
            onClick={() => {
              hasFormSubmit();
            }}
          >
            {isSignin ? "signin" : "signup"}
          </button>

          <p className="text-white text-2xl my-4 ">or</p>

          <p
            className="text-white  cursor-pointer hover:underline hover:text-gray-300"
            onClick={() => {
              toggleSignForm();
            }}
          >
            {isSignin
              ? "New to Netflix? signIn now "
              : "Already Registered? Sign up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
