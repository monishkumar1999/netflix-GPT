import { createSlice } from "@reduxjs/toolkit";


const congifure=createSlice({

    name:"congirue",
    initialState:{
        lang:"en"
    },

    reducers:{
         changeLanguage:(state,action)=>{
              state.lang=action.payload;
         }
    }
})



export default congifure.reducer;

export const {changeLanguage}=congifure.actions;