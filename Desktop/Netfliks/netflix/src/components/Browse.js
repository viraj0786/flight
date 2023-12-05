import React from 'react';
import useNowPlayingMovies from '../Utils/useNowPlayingMovies';
import MainContainer from "./mainContainer";
import  Header from "./Header";
import SecondryContainer from './SecondryContainer';
import usePopularMovies from "../Utils/usePopularMovies"

function Browse() {
useNowPlayingMovies()
usePopularMovies()

return (
        <>
            <Header/>
            <MainContainer/>
            <SecondryContainer/>
        </>
    );
}

export default Browse;