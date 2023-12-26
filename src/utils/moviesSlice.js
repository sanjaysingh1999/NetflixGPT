import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailerData:null,
        popularMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload; 
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies = action.payload; 
        },
        addMovieTrailerData :(state,action) => {
            state.movieTrailerData = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailerData, addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;