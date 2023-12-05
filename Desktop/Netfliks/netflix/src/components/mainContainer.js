import React from 'react';
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';
import VideoTitle from "./VideoTitle"
function MainContainer(props) {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;
    
    const mainMovie = movies[1];
    
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoContainer movie_id={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    );
}

export default MainContainer;