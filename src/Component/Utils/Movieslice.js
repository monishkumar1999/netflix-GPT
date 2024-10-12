import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRated:null,
        upcomming:null
        
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },

        addNowPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },

        addTrailerMovie:(state,action)=>{
            state.trailerVideo=action.payload
        }
,
        addTopMovie:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcommingMovie:(state,action)=>{
            state.upcomming=action.payload
        }
    }
})


export default movieSlice.reducer;

export const {addNowplayingMovies,addTrailerMovie,addNowPopularMovies,addTopMovie,addUpcommingMovie}=movieSlice.actions;