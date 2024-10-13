import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";  // No destructuring here
import moviesReducer  from "./Movieslice";
import gptReducer  from "./GptSlice";
import congirueReducer  from "./Configure";
const appStore = configureStore({
    reducer: {
        user: userReducer,  // Use the default export
        movies:moviesReducer,
        gpt:gptReducer,
        congirue:congirueReducer
    }
});

export default appStore;
