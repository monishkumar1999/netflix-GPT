import React, { useEffect } from "react";
import Login from "./login";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Browser from "./Browser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Utils/Slice";

export const Body = () => {
  

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider>
    </div>
  );
};
