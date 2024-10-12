import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";  // No destructuring here
import moviesReducer  from "./Movieslice";

const appStore = configureStore({
    reducer: {
        user: userReducer,  // Use the default export
        movies:moviesReducer,
    }
});

export default appStore;
