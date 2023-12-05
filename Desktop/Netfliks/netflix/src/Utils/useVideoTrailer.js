import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addVideoTrailer } from "./moviesSlice";

function useVideoTrailer(movie_id) {
  let disptach = useDispatch();

  useEffect(() => {
    let fun = async () => {
      const url = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        options
      )
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.error("error:" + err));
        
      const filterData = url.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : url.results[0];
      disptach(addVideoTrailer(trailer));
    };
    fun();
  }, []);
}

export default useVideoTrailer;
