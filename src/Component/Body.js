import React from "react";
import Login from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";

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
  return( <div>
    <RouterProvider router={appRoute}></RouterProvider>
  </div>)
 
};
