import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { NetflixLogo } from "../url/url";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Utils/Slice";
export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser(email));
        navigate("/browser");
      } else {
        dispatch(removeUser);
        console.log("not login");
        navigate("/");
      }
    });
  }, []);

  const navigate = useNavigate();
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute top-0 left-0 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center z-10">
      <img className="w-40" src={NetflixLogo} alt="Netflix Logo" />

      <div className="flex items-center space-x-4">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />
        <button
          className="bg-red-600 rounded px-4 py-2 text-white font-bold hover:bg-red-500 transition-all"
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
