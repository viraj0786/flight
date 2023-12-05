import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies :null,
        VideoTrailer : null,
        popularMovies  : null
    },
    reducers : {
        addNowPlayingMovies : (state , action)=>{
            state.nowPlayingMovies = action.payload
        },
        addVideoTrailer : (state , action)=>{
            state.VideoTrailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
    }
})

export const {addNowPlayingMovies ,addVideoTrailer ,addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;