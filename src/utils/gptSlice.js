import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"GPT",
    initialState:{
        showGPT:false,
        movieNames:null,
        movieResults: null,
    },
    reducers:{
        setShowGpt:(state,action)=>{
            state.showGPT = !state.showGPT;
        },
        addGptMovieResult: (state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults= movieResults;
        },
    }
});

export const {setShowGpt,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;