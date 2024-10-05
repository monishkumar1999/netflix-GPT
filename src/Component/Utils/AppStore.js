import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";  // No destructuring here

const appStore = configureStore({
    reducer: {
        user: userReducer,  // Use the default export
    }
});

export default appStore;
