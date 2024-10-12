import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },

        addTrailerMovie:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})


export default movieSlice.reducer;

export const {addNowplayingMovies,addTrailerMovie}=movieSlice.actions;