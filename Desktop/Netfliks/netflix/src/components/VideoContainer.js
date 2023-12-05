import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../Utils/useVideoTrailer";

function VideoContainer({movie_id}) {
  const trailerVideo = useSelector((store) => store.movies?.VideoTrailer);

  useVideoTrailer(movie_id);

  console.log("Fsdfsfs", trailerVideo);
  return (
    <div className="w-screen z-20">
      <iframe
        className="w-screen aspect-video"
        src={`http://www.youtube.com/embed/${trailerVideo?.key}/?autoplay=1&mute=1` }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoContainer;
